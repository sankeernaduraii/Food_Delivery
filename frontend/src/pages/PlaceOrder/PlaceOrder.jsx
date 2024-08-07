import React, { useContext } from 'react'
import'./PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount}=useContext(StoreContext);
  return (
    <>
      <form className='place-order'>
        <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name'/>
          <input type='text' placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type='text' placeholder='Street'/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type='text' placeholder='phone'/>
        

      
      <div className='place-order-right'>
      <div className='cart-total'>
          <h2>Cart Totals</h2>
        <div>
        <div className='cart-total-details'>
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p> {/* Placeholder for subtotal */}
        </div>
        <hr />
        <div className='cart-total-details'>
          <p>Delivery Fee</p>
          <p>${45}</p> {/* Placeholder for delivery fee */}
        </div>
        <hr />
        <div className='cart-total-details'>
          <p>Total</p>
          <p>${getTotalCartAmount()+45}</p> {/* Placeholder for total */}
        </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      </form>
   </>
    )
  }

export default PlaceOrder
