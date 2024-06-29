import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Spinner from "./Spinner";
import "../App.css";
import ChatGPTTypewriterEffect from "react-chatgpt-typewriter";
import SearchBox from "./SearchBox";
import Card from "./Card";

export default function GenerativeAi(props) {
  const { prompt, setPrompt } = props;
  const [answer, setAnswer] = useState("");
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
        Welcome to SI <br />( Smart Intelligence )
      </div>
      {!answer && !loading && (
        <div className="flex justify-center mt-20 mb-10">
          <Card />
        </div>
      )}

      <div className="flex justify-center">
        {!loading && (
          <pre className="mt-5 answer">
            <ChatGPTTypewriterEffect
              delay={10}
              cursor={{
                width: "2em",
                height: "3em",
                marginLeft: "1em",
                color: "white",
              }}
              text={answer.replaceAll("*", " ").replaceAll("#", "")}
            />
          </pre>
        )}
      </div>
      <div className="promptBox container">
        <SearchBox
          prompt={prompt}
          handleSubmit={handleSubmit}
          setPrompt={setPrompt}
        />
      </div>
      {loading && <Spinner />}
    </div>
  );
}
