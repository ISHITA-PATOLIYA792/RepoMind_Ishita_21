"use client";

import { useState } from "react";
import Cardetail  from './carddetail';

export default function RepoTreeFetcher() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/analyze/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data);
        console.log(summary.entities.dates);
      } else {
        setError(data.error || "Failed to process file.");
      }
    } catch(e)
    {

    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload and Analyze File</h1>
      <input
        type="file"
        className="border rounded w-full p-2 mb-4"
        onChange={handleFileChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={uploadFile}
        disabled={loading}
      >
        {loading ? "Submmited" : "Submit"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {summary !== null && (
        <>
        
        <h2 className="text-2xl font-semibold text-center mt-5 mb-10">Extracted Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
        <div className="bg-white p-4 rounded shadow-md">
          
          {summary.entities.dates.length !=0 && <>
          <h3 className="text-lg font-semibold mt-4">Dates</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
              summary.entities.dates.map((keyword, index) => (
                <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
              ))
            }</pre></>}
            {summary.entities.locations.length !=0 && <>
          <h3 className="text-lg font-semibold mt-4">Location</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
              summary.entities.locations.map((keyword, index) => (
                <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
              ))
            }</pre></>}
            {summary.entities.organizations.length !=0 && <>
          <h3 className="text-lg font-semibold mt-4">Organizations</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
              summary.entities.organizations.map((keyword, index) => (
                <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
              ))
            }</pre></>}
          <h3 className="text-lg font-semibold mt-4">Keywords</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
              summary.keywords.map((keyword, index) => (
                <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
              ))
            }</pre>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold  mt-4"> Main Points</h3>
          <pre className="bg-gray-100 p-4 rounded flex flex-wrap text-sm">
          <span className="bg-gray-200 p-1 rounded-md  text-wrap">{summary.main_points}</span>
          </pre>
          <h3 className="text-lg font-semibold mt-4">Summary</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
          <span className="bg-gray-200 p-1 rounded-md text-wrap">{summary.summary}</span></pre>
        </div>
      </div>
      </>
      )}
    </div>
    
  );
}
