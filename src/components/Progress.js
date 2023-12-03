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
      <div style={{textAlign:"center"}}>
        <div
          style={{
            overflow: "hidden",
            width: "500px",
            margin: "auto",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          <span
            style={{
              position: "absolute",
              color: percent>49?"white":"black"
            }}
          >
            {percent}%
          </span>
          <div style={{ width: `${percent}%`, height: "20px", backgroundColor:"green" }} />
        </div>
      </div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
};

export default Progress;
