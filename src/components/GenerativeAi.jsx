import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Spinner from "./Spinner";
import "../App.css"

export default function GenerativeAi() {
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDAhR-7Rxwibz-H2BXCcsR_5pzhGVfxvLE"
  );

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      setLoading(true);
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setAnswer(text);
      setLoading(false);
    } catch (error) {
      console.error("Error generating content:", error);
      setAnswer("Error generating content. Please try again.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    run();
  };

  return (
    <div className="container mt-10">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="form-control me-2"
          placeholder="Enter text for generate your answer... "
        />
        <button type="submit" className="btn btn-outline-dark">
          Generate
        </button>
      </form>
      {!answer && (
        <div className="text-center fs-5"> Welcome to Generative Ai</div>
      )}
      {loading && <Spinner />}
      {!loading && (
        <pre
          className="mt-5 answer"
          dangerouslySetInnerHTML={{ __html: answer.replaceAll("*", " ") }}
        ></pre>
      )}
    </div>
  );
}
