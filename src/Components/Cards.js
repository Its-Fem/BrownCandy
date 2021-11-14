import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Packs !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              src='image/Cadbury Bournville Bouquet.jpg'
              text='Cadbury Bournville Bouquet'
              label='New'
              path='/Products'
            />
            <CardItem
              src='image/Assorted Cadbury Chocolates Bouquet.jpg'
              text='Assorted Cadbury Chocolates Bouquet'
              label='New'
              path='/Products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='image/Carnations With Chocolate Gift Hamper.jpg'
              text='Carnations With Chocolate Gift Hamper'
              label='New'
              path='/Products'
              
            />
            <CardItem
              src='image/Bouquet of 20 Cadbury Dairy Milk Chocolates.jpg'
              text='Bouquet of 20 Cadbury Dairy Milk Chocolates'
              label='New'
              path='/products'
            />
            <CardItem
              src='image/Dark Fanctasy Choco Fills.jpg'
              text='Dark Fanctasy Choco Fills'
              label='New'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
