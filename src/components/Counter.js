// import {React, useEffect, useState} from 'react'

// const Counter = () => {

//     const[count, setCount] = useState(0);
//     const[pause, setPause] = useState(true);

//     useEffect(()=>{
//         if(pause)
//         return;
//         setTimeout(()=>{
//             setCount(count+1)
//         },100)
//     },[count, pause])

//     const handleStart=()=>{
//         setPause(false);
//     }

//     const handleReStart=()=>{
//         setCount(0)
//         setPause(true)
//     }

//     const handlePause=()=>{
//        setPause(true)
//     }

//   return (
//     <div>
//         {count}
//         <button onClick={handleStart}>start</button>
//         <button onClick={handlePause}>pause</button>
//         <button onClick={handleReStart}>re-start</button>
//     </div>
//   )
// }

// export default Counter
import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (pause) return;

    const timerId = setTimeout(() => {
      setCount(count + 1);
    }, 100);

    return () => clearTimeout(timerId); 
  }, [count, pause]);

  const handleStart = () => {
    setPause(false);
  };

  const handleReStart = () => {
    setCount(0);
    setPause(true); 
  };

  const handlePause = () => {
    setPause(true);
  };

  return (
    <div>
      {count}
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReStart}>Re-start</button>
    </div>
  );
};

export default Counter;
