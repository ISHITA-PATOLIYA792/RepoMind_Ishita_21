"use client";

import { useState } from "react";
import Tree_view from "./tree_view";

export default function RepoTreeFetcher() {
  const [repoUrl, setRepoUrl] = useState("");
  const [treeData, setTreeData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepoTree = async () => {
    setLoading(true);
    setError("");
    setTreeData(null);

    try {
      const response = await fetch("http://127.0.0.1:4000/get-repo-tree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repo_url: repoUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setTreeData(data);
      } else {
        setError(data.error || "Failed to fetch repository tree.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Repo Tree Viewer</h1>
      <input
        type="text"
        className="border rounded w-full p-2 mb-4"
        placeholder="Enter GitHub Repo URL (e.g., https://github.com/user/repo)"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={fetchRepoTree}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Repo Tree"}
      </button>
      {treeData!==null &&  <Tree_view data={treeData.tree}/>}
      {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}
      
      {/* {treeData && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Repository: {treeData.repo} ({treeData.branch} branch)</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(treeData.tree, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}
