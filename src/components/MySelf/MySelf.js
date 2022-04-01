import { useContext } from "react";
import { ReactContext } from "../GrandPa/GrandPa";

const MySelf = ({count}) => {
   const getContext = useContext(ReactContext)
    return (
        <div>
            <h2>myself</h2>
            <p>{count}</p>
            <p>{getContext}</p>
        </div>
    );
};

export default MySelf;