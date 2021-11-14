import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCardItem(props) {
  return (
    <>
      <li className='Product_cards__item'>
        
        <Link className='Pcards__item__link' to={{ pathname:props.path, state:props.product}}>
          <figure className='Pcards__item__pic-wrap' data-category={props.label}>
            <img
              className='Pcards__item__img'
              alt='BrownCandy Image'
              src={props.src}
            />
          </figure>
          <div className='Pcards__item__info'>
            <h5 className='Pcards__item__text'>{props.text}</h5>
            <h4 className='fa fa-inr Pcards__item__text'>{props.rate}</h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductCardItem;
