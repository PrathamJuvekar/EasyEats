import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p>₹{item.food_price}</p>
                <div>{cartItems[item.food_id]}</div>
                <p>₹{item.food_price*cartItems[item.food_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.food_id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>₹{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>GST tax</p><p>₹{getTotalCartAmount()===0?0:48}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+48}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO PAY</button>
        </div>
         {/*<div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default Cart
