import React, { useState, useEffect } from 'react';
import '../Pages/ProductComponents/Card.css'
import { LocalStorageGet, LocalStoragSet } from '../../Utility/LocalStorage';


function Card(props) {
  const [items, setItems] = useState([]);

  const updateCartItem = () => {
    var cartItems = JSON.parse(LocalStorageGet('CartItems'));
    setItems(cartItems);
  }

  useEffect(() => {
    updateCartItem();
  }, [])


  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div>
      <ul>
          <li>
            <div className='Shoping_Cart_container'>
              <div className='cart_title'> Shopping Cart </div>
              {items.map(item =>
              <div className='Product_cards_list'>
                <div className='Product_image'>
                  <img src={item.image} className='image' />
                </div>
                <div className='Product_cart_detatil'>
                  <span> {item.name} </span>
                  <span>{item.description}</span>
                </div>
                <div className='P_price'> <span>{"₹ " + item.rate}</span></div>
                <div className='p_Button' onClick={incrementCounter}>
                   <button5 className='Plus_btn' >
                         +
                   </button5>
                     
                     </div>
                    
                    <label >{counter}</label>
                    
                <div className='M_btnDiv' onClick={decrementCounter}>
                    <button5 className='Minus_btn' >
                         -
                    </button5>
                </div>
              <div> 
    </div>

              </div>
            )}
            </div>
          </li>
      </ul>
          <div> 
           <button className="Buy-btn_cart">Buy</button>
      
        </div>
    </div>

  )
}

export default Card;
