import React from "react";
import "../App.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Card() {
  return (
    <div>
      <div className="container1">
        <div
          data-text="Github"
          style={{ r: "-15" }}
          className="glass cursor-pointer"
        >
          <a
            href="https://github.com/honeypathkar/ai-chat-box"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 80 }} />
          </a>
        </div>
        <div
          data-text="Fast Response"
          style={{ r: "5" }}
          className="glass cursor-pointer"
        >
          <ElectricBoltIcon sx={{ fontSize: 80 }} />
        </div>
        <div
          data-text="Safe Browsing"
          style={{ r: "25" }}
          className="glass cursor-pointer"
        >
          <SafetyCheckIcon sx={{ fontSize: 80 }} />
        </div>
      </div>
    </div>
  );
}
