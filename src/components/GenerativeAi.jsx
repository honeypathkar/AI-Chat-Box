import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Spinner from "./Spinner";
import "../App.css";
import SendIcon from "@mui/icons-material/Send";

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
      <div className="text-center text-3xl">
        {" "}
        Welcome to SI ( Smart Intelligence )
      </div>
      <div className="flex justify-center">
        {!loading && (
          <pre className="mt-5 answer">{answer.replaceAll("*", " ").replaceAll("#", "")} </pre>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex promptBox container">
        <input
          type="search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="searchBox rounded-full py-2 px-4 border"
          placeholder="Enter text for generate your answer... "
        />
        <button type="submit" className="btn rounded-full border ml-1 bg-[#121223] px-3 py-2">
          <SendIcon sx={{ color: "#FFF" }} />
        </button>
      </form>
      {loading && <Spinner />}
    </div>
  );
}
