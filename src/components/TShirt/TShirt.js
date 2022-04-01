import React from 'react';
import './TShirt.css'

const tShirt = ({tShirt,addToCart}) => {
    const {name,picture,price,} =tShirt
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <h6>Price: ${price}</h6>
            <button onClick={()=>addToCart(tShirt)}>Add Cart</button>
        </div>
    );
};

export default tShirt;