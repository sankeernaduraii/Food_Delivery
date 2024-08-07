import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p> {/* Fixed cartItems access */}
                <p>{item.price * cartItems[item._id]}</p> {/* Fixed cartItems access */}
                <p>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </p>
                <hr />
              </div>
            );
          }
          return null; // Ensure to return null if the item is not in the cart
        })}
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
        <div>
        <div className='cart-total-details'>
          <p>Subtotal</p>
          <p>{0}</p> {/* Placeholder for subtotal */}
        </div>
        <hr />
        <div className='cart-total-details'>
          <p>Delivery Fee</p>
          <p>{2}</p> {/* Placeholder for delivery fee */}
        </div>
        <hr />
        <div className='cart-total-details'>
          <p>Total</p>
          <p>{0}</p> {/* Placeholder for total */}
        </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        </div>
     

      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='Promo code'></input>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
