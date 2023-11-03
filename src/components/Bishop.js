import { useEffect, useState } from "react";

const Bishop = () => {
  const [n1, setN1] = useState(null);
  const [n2, setN2] = useState(null);
  const [grid, setGrid] = useState([]);

 function fetchCol(r,c){
  
    for(let i=0 ; i<n1; i++)
    {
        for(let j=0 ; j<n2 ; j++)
        {
            let cell = document.getElementById(`r${i}c${j}`)
            if( r!==-1 &&  Math.abs(r-i)===Math.abs(c-j))
            {
                cell.style.backgroundColor="blue"
            }
           
            else if((i+j)%2===0)
            cell.style.backgroundColor="black"
           
            else
            cell.style.backgroundColor="white"
        }
    }

 }

  function handleNumber1(e) {
    setN1(e.target.value);
  }

  function handleNumber2(e) {
    setN2(e.target.value);
  }

  function createGrid(n1, n2) {
    let newGrid = [];

    for (let i = 0; i < n1; i++) {
      let row = [];

      for (let j = 0; j < n2; j++) {
        row.push(
          <div
        id={`r${i}c${j}`}
        onMouseOver={()=>fetchCol(i,j)}
        onMouseOut={()=>fetchCol(-1,-1)}
            style={{
              width: "60px",
              height: "60px",
              border: "2px solid black",
              display:"inline-block",
              margin:"0px",
              backgroundColor: (i+j)%2===1?"white":"black",
            }}
          />
        );
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  }

  return (
    <div>
      <input value={n1} type="number" onChange={handleNumber1} />
      <input
        value={n2}
        type="number"
        onBlur={() => createGrid(n1, n2)}
        onChange={handleNumber2}
      />

      {grid?.map((row, rowindex) => {
        return (
          <div style={{margin:"0px"}} key={rowindex}>
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>{cell} </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Bishop;
