import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Spinner from "./Spinner";
import "../App.css";

export default function GenerativeAi() {
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_REACT_APP_AI_CHAT_BOX_API;
  const genAI = new GoogleGenerativeAI(apiKey);

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
      <div className="text-center fs-5"> Welcome to SI ( Smart Intelligence )</div>

      {!loading && (
        <pre
          className="mt-5 answer"
          dangerouslySetInnerHTML={{ __html: answer.replaceAll("*", " ") }}
        ></pre>
      )}
      <form onSubmit={handleSubmit} className="d-flex promptBox container">
        <input
          type="search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="form-control me-2 searchBox"
          placeholder="Enter text for generate your answer... "
        />
        <button type="submit" className="btn btn-outline-dark">
          Generate
        </button>
      </form>
      {loading && <Spinner />}
    </div>
  );
}
