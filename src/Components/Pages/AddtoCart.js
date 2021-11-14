import React, { useState } from 'react'
import { History } from 'history';
import './ProductComponents/AddtoCart.css'
import { useHistory } from 'react-router';
import LocalStorage, { LocalStorageGet, LocalStoragSet } from '../../Utility/LocalStorage';
function AddtoCart(props) {
    const [item, setItem] = useState(props.location.state);
  
    const history = useHistory();
    const AddCartev = (e, product) =>{
        var cartItems = LocalStorageGet('CartItems');
        if(cartItems){
            cartItems = JSON.parse(cartItems);
            cartItems.push(product);
        }
        else{
            cartItems = [product];
        }
        LocalStoragSet('CartItems', JSON.stringify(cartItems))
        history.push('/card');
        // console.log("Fahim", e, product);

    }

    return (
        <>
        <div className="AddtoCart_Container">
            <div className="product_detail">
            <div className="AddtoCart_img">
                <img src={item.image} className='image'/>
                
            </div>
            {/* <div className="AddCart-btn"> */}
            <button className="add-btn" onClick={(event) => AddCartev(event, item)}>Add to cart</button>
            {/* </div> */}
           {/* <div className="Buy-btndiv"> */}
               <button className="Buy-btn">Buy</button>
           {/* </div> */}
            </div>
            <div className="pro-discription">
                <h5 className="Prod_name">{item.name}</h5>
                <h5 className="Prod_rate">{ "₹ "+ item.rate}</h5> 
                <div className="descr"><h4>{item.description}</h4></div>              
            </div>
        </div>
        </>
    )
}

export default AddtoCart
