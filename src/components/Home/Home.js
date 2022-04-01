import { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt'
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts()
    const [cart,setCart] = useState([])
    const addToCart =(item)=>{
        const exist = cart.find(shirt => shirt._id === item._id)
        if(!exist){
           const newCart = [...cart , item]
            setCart(newCart)
        }
        else{
            alert("added before")
        }
        
    }

    const removeFromCart = (item) =>{
        const restItem = cart.filter(shirt => shirt._id !== item._id)
        setCart(restItem)
    }
    const removeAll = () =>{
        setCart([])
    }
    
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                         key={tShirt._id} 
                         tShirt={tShirt}
                         addToCart={addToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeAll={removeAll} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
};

export default Home;