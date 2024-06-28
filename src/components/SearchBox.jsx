import React from "react";

export default function SearchBox(props) {
  const { prompt, setPrompt, handleSubmit } = props;
  return (
    <div className="flex justify-center">
      <div className="relative rounded-full overflow-hidden bg-[#121223] border shadow-xl lg:w-[40%] md:w-[50%] sm:w-[60%] mr-[24px]">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Enter a prompt here..."
            className="input bg-transparent outline-none border-none pl-6 pr-10 py-4 w-full font-sans text-lg font-semibold"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="absolute right-2 top-[0.4em]">
            <button
              className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
              type="submit"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                  fill="white"
                  fillOpacity="0.01"
                ></path>
                <path
                  d="M42.8496 18.7067L21.0628 44.6712"
                  stroke="white"
                  strokeWidth="3.76603"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                  stroke="white"
                  strokeWidth="3.76603"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
              <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
