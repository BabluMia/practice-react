import "./GrandPa.css";
import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const ReactContext = createContext('ring')

const GrandPa = () => {
  const [count, setCount] = useState(0);
  const minus = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    
      <ReactContext.Provider value="Diamond Ring">
        <div>
        <div className="grand-pa">
          <Father count={count}></Father>
          <Uncle count={count}></Uncle>
          <Aunty count={count}></Aunty>
        </div>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => minus()}>Minus</button>
      </div>
      </ReactContext.Provider>
    
  );
};

export default GrandPa;
