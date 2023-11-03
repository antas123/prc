import { React, useState, useEffect } from "react";
import "./Prg.css";

const Progress = () => {
  const [percent, setPercent] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart && percent < 100)
      setTimeout(() => {
        setPercent(percent + 1);
      }, [20]);
  }, [percent]);

  const handleStart = () => {
    setIsStart(true);
    if (percent < 100) setPercent(percent + 1);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  return (
    <>
      <div>
        <div
          className="prg"
          style={{
            overflow: "hidden",
            width: "500px",
            margin: "auto",
            height: "20px",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "500px",
              justifyContent: "center",
              alignItems: "center",
              color: percent>49?"white":"black"
            }}
          >
            {percent}%
          </span>
          <div style={{ width: `${percent}%`, height: "20px" }} />
        </div>
      </div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
};

export default Progress;
