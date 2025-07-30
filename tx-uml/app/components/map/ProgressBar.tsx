// components/ProgressBar.tsx
import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  score: number | null;
  message: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score, message }) => {
  const getColor = () => {
    message = "" 
    if (score === null) {
      message += "❓No clear data available for this region";
      return "transparent";
    }
    if (score <= 20) {
      message += "✅ Area is clear of any known underground coal mines";
      return "green";
    }
    if (score <= 40) {
      message += "☝️ Region has been validated as structurally stable";
      return "lightgreen";
    }
    if (score <= 60) {
      message += "🚦Borderline zone — close to a known mining boundary";
      return "yellow";
    }
    if (score <= 85) {
      message += "⚠️ Failed safety check — proximity to mining site";
      return "orange";
    } else {
      message += "🛑 Warning ! Abandoned mine detected in this region";
      return "red";
    }
  };

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          /*width: `${score}%`,*/
          backgroundColor: getColor(),
        }}
      ></div>
      <div className="progress-message">{message}</div>
      <div className="progress-label">{score}</div>
      {/* <span>%</span> */}
    </div>
  );
};

export default ProgressBar;
