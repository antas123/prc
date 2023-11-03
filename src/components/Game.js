import React, { useState } from 'react';

const Game = () => {
  const [n1, setN1] = useState(null);
  const [n2, setN2] = useState(null);
  const [grid, setGrid] = useState([]);

  const handleNumber1Change = (event) => {
    const value = event.target.value;
    setN1(value);
  };

  const handleNumber2Change = (event) => {
    const value = event.target.value;
    setN2(value);
  };

  const getRandonPos=(a,b)=>{
    const r1 = Math.floor(Math.random() * (a));
    const c1 = Math.floor(Math.random() * (b));

    function copy2DArray(arr) {
      return arr.map(innerArray => [...innerArray]);
    }

    for(let i=0; i<a ; i++)
    {
      for(let j=0 ; j<b ; j++)
      {
        if(i!==r1 && j!==c1)
        {
          let newGrid = copy2DArray(grid);
          for(let i=0 ; i<a ; i++)
          {
            for(let j=0 ; j<b ; j++)
            {
              if(newGrid[i][j]==='😅')
              newGrid[i][j]=0;
            }
          }
          newGrid[r1][c1] = '😅';
          newGrid[i][j] = '😅';
          setGrid(newGrid);
          return;
        }
      }
    }
  }

  const createGrid = (n1,n2) => {
    const newGrid = [];
    for (let i = 0; i < n1; i++) {
      const row = [];
      for (let j = 0; j < n2; j++) {
        row.push('0');
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const getPosHandler = () => {  
    getRandonPos(n1,n2);
  }

  return (
    <div>
      <label>Number 1:</label>
      <input type="number" value={n1} onChange={handleNumber1Change} />
      <label>Number 2:</label>
      <input type="number" value={n2} onBlur={()=>createGrid(n1,n2)} onChange={handleNumber2Change} />
     
      {/* <button onClick={}>Create Grid</button> */}
      <button onClick={()=>getPosHandler()}>display emojis</button>
     
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <span key={cellIndex}>{cell}{" "}</span>
          ))}
          <br />
        </div>
      ))}

    </div>
  );
}

export default Game;
