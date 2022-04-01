import React from "react";
import MySelf from "../MySelf/MySelf";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({count}) => {
  return (
    <div style={{padding:'10px'}}>
      <h2>Father</h2>
      <div style={{ display: "flex" ,justifyContent:"space-between",padding:'10px'}}>
        <MySelf count={count} />
        <Brother count={count} />
        <Sister count={count} />   
      </div>
      <p>{count}</p>
    </div>
  );
};

export default Father;
