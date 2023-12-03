import React, { useState } from "react";
import star from "../Images/star.jpg";
import goldStar from "../Images/goldstar.webp";

const Star = () => {
  let arrStar = [1, 2, 3, 4, 5];

  const [isStar, setStar] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [isStarHover, setStarHover] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });


  function handleStar(a) {
    // Create a new object to avoid directly modifying the state
    const updatedStarState = { ...isStar };
     {
      for (let key in updatedStarState) {
        if (key <= a) {
          updatedStarState[key] = true;
        } else {
          updatedStarState[key] = false;
        }
      }
    } 
    setStarHover(updatedStarState);
  }

  function handleColorstr(a) {
    const updatedStarState = { ...isStar };

    for (let key in updatedStarState) {
      if (key <= a) {
        updatedStarState[key] = true;
      }
      else
      updatedStarState[key]=false;
      setStar(updatedStarState);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="str"
      >
        {arrStar.map((data, index) => (
          <div key={index + 1}>
            <img
              style={{ height: "10em" }}
              src={isStarHover[data] || isStar[data] ? goldStar : star}
              alt="star"
              onClick={() => handleColorstr(data)}
              onMouseLeave={() => handleStar(-1)}
              onMouseOver={() => handleStar(data)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Star;
