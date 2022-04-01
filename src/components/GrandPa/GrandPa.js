import "./GrandPa.css";
import React, { useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

const GrandPa = () => {
  const [count, setCount] = useState(0);
  const minus = () =>{
    if(count >= 0 ){
      setCount(count - 1 )
    }
  }

  return (
    <div>
      <div className="grand-pa">
        <Father count={count}></Father>
        <Uncle count={count}></Uncle>
        <Aunty count={count}></Aunty>
      </div>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => minus}>Minus</button>
    </div>
  );
};

export default GrandPa;
