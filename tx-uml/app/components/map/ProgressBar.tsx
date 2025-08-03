// components/ProgressBar.tsx
"use client";
import React from "react";
import "./ProgressBar.css";
import { useMapTheme } from '../../context/MapThemeContext';

interface ProgressBarProps {
  score: number | null;
  message: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score, message }) => {

  const { theme, setTheme } = useMapTheme();
  
    let style: React.CSSProperties = {};
    let titleStyle: React.CSSProperties = {};
    if (theme === 'dark') {
      style = { background: '#222', color: '#fafafa' };
      titleStyle = { color: '#fafafa' };
    } else if (theme === 'satellite') {
      style = { background: '#001f3f', color: '#fff' };
      titleStyle = { color: '#fff' };
    } else {
      style = { background: '#fff', color: '#222' };
      titleStyle = { color: '#222' };
    }
  
    const themes = [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
      { label: 'Satellite', value: 'satellite' },
    ];
  const getColor = () => {
    message = "" 
    if (score === null) {
      message = ''
      message += "❓No clear data available for this region";
      return "transparent";
    }
    if (score <= 20) {
    
      message = "✅ Area is clear of any known underground coal mines";
      return "green";
    }
    if (score <= 40) {
      message = "☝️ Region has been validated as structurally stable";
      return "lightgreen";
    }
    if (score <= 60) {
      message = "🚦Borderline zone — close to a known mining boundary";
      return "yellow";
    }
    if (score <= 85) {
     
      message = "⚠️ Failed safety check — proximity to mining site";
      return "orange";
    } if (score > 85) {
      message = "🛑 Warning ! Abandoned mine detected in this region";
      return "red";
    } else {
      message = "";
      return "transparent";
    }
  };

  return (
    <div className="progress-container" style={style}>
      <div
        className="progress-bar"
        style={{
          width: `${score}%`,
          backgroundColor: getColor(),
        }}
      ></div>
      <div className="progress-message" style={titleStyle}>{message}</div>
      <div className="progress-label" style={titleStyle}>{score}%</div>
    </div>
  );
};

export default ProgressBar;
