import React from "react";

function CircularTaskProgress({ completed, total }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  // Calculate percentage
  const percent = total > 0 ? (completed / total) * 100 : 0;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      // style={{ display: "flex", margin: "20px auto" }}
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#b2aaaacc"
        // stroke="#eee"
        strokeWidth="10"
        fill="none"
      />
      {/* Progress circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        // stroke="#4caf50"
        stroke="#143a81 "
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      {/* Text in center */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="bold"
      >
        {completed} / {total}
      </text>
    </svg>
  );
}

export default CircularTaskProgress;
