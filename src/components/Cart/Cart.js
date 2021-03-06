import './Cart.css'
import React from 'react';

const Cart = ({cart,removeFromCart,removeAll}) => {
    // rendariing one start
    let comand;
    if(cart.length === 0){
        comand = <h4>Please . Add Atleast One!!</h4> ;
    }
    else if(cart.length === 1){
        comand = <h4>Please . Add More!!</h4> ;
    }
    else{
        comand = <h4>Thanks For Adding!!</h4> ;
    }
    // // rendariing one end
    return (
        <div>
            <h3>Selected Item :{cart.length}</h3>
            {/* // rendariing one start */}
            {comand}

            {
                 cart.map(tShirt => <p>{tShirt.name}<button onClick={()=>removeFromCart(tShirt)}>X</button> </p>)
            }
            {/* rendering two with &&  */}
            {
                cart.length === 3 && < div style={{color:'orange'}}> <h4>Sobaike gift koro!!</h4> </div>
            }
            {/* rendering three */}
            {cart.length < 4  ? <p>Keep Adding !! </p>: <button onClick={removeAll}>Remove</button>}
        </div>
    );
};

export default Cart;