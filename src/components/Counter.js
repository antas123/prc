import {React, useEffect, useState} from 'react'

const Counter = () => {

    const[count, setCount] = useState(0);
    const[pause, setPause] = useState(true);

    useEffect(()=>{
        if(pause)
        return;
        handleStart()
    },[count, pause])


    const handleStart=()=>{
        setPause(false);
        setTimeout(()=>{
            setCount(count+1)
        },100)
    }

    const handleReStart=()=>{
        setCount(0)
        setPause(true)
    }

    const handlePause=()=>{
       setPause(true)
    }

  return (
    <div>
        {count}
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReStart}>re-start</button>
    </div>
  )
}

export default Counter