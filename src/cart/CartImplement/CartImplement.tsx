import React,{useState, useEffect} from 'react';

import style from './App.module.css';
import jsonData from '../../resource/cartItems/items.json';
import Cart from '../Cart/Cart';
import CartItem from "../CartItems/CartItem";

const CartImplement = () => {
      // use stae []
      const [chechedItems, setChechedItems] = useState<number[]>([]);
      
      const [price, setPrice] = useState<number>(0);
      const [Shipping, setShipping] = useState<number>(0);
      const [total, setTotal] = useState<number>(0);
    
      // is checked
    
      // onCkeckToggle(id)
      async function isClicked(id: number, check: boolean): Promise<void> {
        // console.log(id);
        // console.log(check);
        setChechedItems((prevCheckedItems) => {
          if (check) {
            return [...prevCheckedItems, id]; // Add ID if checked
          } else {
            return prevCheckedItems.filter((item) => item !== id); // Remove ID if unchecked
          }
        });
      }

      useEffect(() => {
        var netPrice = 0;
        var netShipping = 0;
        var total = 0;
        chechedItems.map((item) => {
          jsonData.map((data) => {
            if(data.id === item){
              netPrice += data.price;
              netShipping += data.shipping;
            }
          })
        });
        total = netPrice + netShipping;
        setPrice(netPrice);
        setShipping(netShipping);
        setTotal(total);
        //console.log(price);
      }, [chechedItems]);
    
      return (
        <div className={style.appContainer}>
              <Cart
                totalPrice = {price}
                totShipping = {Shipping}
                total = {total}>
    
                {jsonData.map((item) =>
                <CartItem key={item.id}
                  id={item.id}
                  product = {item.product}
                  price = {item.price}
                  image = {item.image}
                  isClicked = {isClicked}
                  // onCkeckToggle 
                />)}
            </Cart>
        </div>
      );
}

export default CartImplement;