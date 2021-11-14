import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './ProductComponents/Product.css';
import producsts from '../../mock/product/ProductList.json'
import ProductCardItem from './ProductComponents/ProductCardItom'
export default function Products() {
  const [productList, setProductList] = useState(producsts)

  return(
    
  <>
    <h1 className='Title'>PRODUCTS</h1>
    <div className='product_container'>  

    <div className='Product_cards__wrapper'>
          <ul className='Product_cards__items'>
            {
              productList.map((prod) => {
                return <ProductCardItem key={prod.id}
                  src={prod.image}
                  text={prod.name}
                  label={prod.priority}
                  rate={ "₹ " + prod.rate}
                  path='/AddtoCart'
                  product={prod}
                  />
              })
            }
          </ul>
        </div>
        </div>
        <Footer/>
  </>
  )
}
