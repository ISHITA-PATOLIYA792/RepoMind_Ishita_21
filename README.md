

### 🖥️ Demo
[Click here](https://drive.google.com/drive/folders/1QsgIhdCyqZ1hiAJHFmRdkC0SgBLpFTmH?usp=sharing) to watch a demo of the video upload feature.

### 📒 Documentation
[Click here](https://drive.google.com/file/d/1qcP-_JGjJg5yL7XfAhbrO7rAIFtAC0ty/view?usp=drive_link)

# RepoMind: A Smart GitHub Companion

[cite_start]RepoMind is an intelligent, AI-powered Software as a Service (SAAS) platform designed to act as a unified, searchable knowledge base for software projects[cite: 134, 254]. [cite_start]It tackles the significant challenge of "code comprehension," where developers spend valuable time trying to understand large, complex codebases[cite: 56, 105, 106].

This platform solves two primary problems:
1.  [cite_start]**Codebase Obscurity:** It allows developers to query their code repositories using natural language (e.g., "How does the payment logic work?") and receive AI-generated answers[cite: 58, 62, 260, 261].
2.  [cite_start]**Loss of Contextual Knowledge:** It captures the ephemeral, undocumented knowledge from project meetings (the "why") by allowing users to upload, transcribe, and summarize audio recordings[cite: 115, 116, 117, 139, 263, 264].

[cite_start]This project was submitted in November 2025 as a 7th Semester Minor Project (IT452) at Charotar University of Science and Technology (CHARUSAT)[cite: 15, 23].

## 🚀 Core Features

* [cite_start]**AI-Powered Code Query:** Connect your public GitHub repositories and ask high-level, natural language questions about your codebase[cite: 60, 138, 277].
* [cite_start]**Google Gemini Integration:** Leverages the **Google Gemini AI API** as the core AI processing module for in-depth code analysis and answer generation[cite: 61, 63, 138, 279].
* [cite_start]**AI Meeting Transcription:** Upload audio recordings from project meetings (e.g., `.mp3`, `.wav` from Zoom or Google Meet)[cite: 139, 155, 263, 280].
* [cite_start]**AssemblyAI Integration:** Uses the **Assembly AI API** to generate accurate, time-stamped text transcriptions of discussions, making spoken context instantly searchable[cite: 140, 156, 264, 281].
* [cite_start]**Secure Authentication:** Features a complete and secure user authentication and management system (Sign Up, Sign In) handled by **Clerk API**[cite: 59, 137, 152, 266, 275].
* [cite_start]**SAAS Project Dashboard:** A centralized, user-friendly dashboard to create and manage projects, view query history, and access audio transcripts[cite: 60, 64, 141, 157, 276].
* [cite_start]**Credit Management System:** A built-in credit system manages AI resource usage for both code queries and audio transcriptions, demonstrating a complete SAAS model[cite: 64, 142, 282, 287].
* [cite_start]**Persistent Storage:** All query histories, answers, and transcriptions are saved in a **Supabase** (PostgreSQL) database for future reference[cite: 64, 143, 158, 288].

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **Next.js (React)** | [cite_start]The core React framework for the UI and server-side rendering[cite: 167, 511]. |
| **Backend** | **Node.js** | [cite_start]The runtime environment for the backend[cite: 168]. |
| **Database** | **Supabase (PostgreSQL)** | [cite_start]Used as the primary database for storing user data, projects, and query history[cite: 169, 512]. |
| **Authentication**| **Clerk API** | [cite_start]For complete user authentication (sign-up, sign-in) and management[cite: 170, 509]. |
| **AI Services** | **Google Gemini AI API** | [cite_start]The LLM used for understanding code and generating natural language answers[cite: 176, 513]. |
| | **Assembly AI API** | [cite_start]Used for processing and transcribing audio files from meetings[cite: 176]. |
| **DevOps** | **Git & GitHub** | [cite_start]For version control[cite: 178]. |
| **IDE** | **Visual Studio Code** | [cite_start]The development environment used[cite: 177]. |


## ⚙️ Getting Started

To run this project locally, you must first create a `.env` file in the root directory and add the following environment variables:

```bash
# Clerk Authentication (Get from clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Supabase Database (Get from supabase.com)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Google Gemini AI (Get from Google AI Studio)
GEMINI_API_KEY=

# AssemblyAI (Get from assemblyai.com)
ASSEMBLYAI_API_KEY=



