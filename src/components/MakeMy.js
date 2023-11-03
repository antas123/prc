import {React, useState} from 'react'

const MakeMy = () => {

    const [isCol, setIsCol] = useState({
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false,
        "6":false,
        "7":false
    })
    let cnt=0;

    
    async function clearIsCol() {
        for (const key in isCol) {
          if (isCol[key] === true) {
            await new Promise((resolve) => {
              setTimeout(() => {
                setIsCol((prev) => {
                  return {
                    ...prev,
                    [key]: false,
                  };
                });
                resolve();
              }, 1000);
            });
          }
        }
      }
      
      (function checkCol() {
        let cnt = 0;
      
        for (const key in isCol) {
          const value = isCol[key];
          if (value === true) cnt++;
        }
      
        if (cnt === 7) {
          clearIsCol();
        }
      })();
      
    

    const handleCol=(a)=>{
       setIsCol((prev)=>{
       return {
        ...prev,
        [a]:!prev[a]
       }
       })

     }

  return (
    <div>
        <div className="box1" style={{display:"flex", flexDirection:"row"}} >
           <div className="p1" onClick={()=>handleCol("1")}  style={{height:"150px", width:"150px", border:"2px solid black", margin:"10px", backgroundColor:isCol["1"]===true?"green":"white"}}></div>
           <div className="p2" onClick={()=>handleCol("2")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[2]===true?"green":"white"}}></div>
           <div className="p3" onClick={()=>handleCol("3")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[3]===true?"green":"white"}}></div>
        </div>
        <div className="box2">
          <div className="p4" onClick={()=>handleCol("4")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[4]===true?"green":"white"}}></div>
        </div>
        <div className="box3" style={{display:"flex", flexDirection:"row"}}>
           <div className="p5" onClick={()=>handleCol("5")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[5]===true?"green":"white"}}></div>
           <div className="p6" onClick={()=>handleCol("6")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[6]===true?"green":"white"}}></div>
           <div className="p7" onClick={()=>handleCol("7")} style={{height:"150px", width:"150px", border:"2px solid black",margin:"10px",backgroundColor:isCol[7]===true?"green":"white"}}></div>
        </div>
    </div>
  )
}

export default MakeMy