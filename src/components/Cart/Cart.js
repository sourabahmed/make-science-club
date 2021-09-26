import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const scientist of cart){
        const sub = scientist.salary;
        const toNum = parseFloat(sub);
        total = total + toNum;
    }
    return (
        <div className="cart">
            <h3><i className="fas fa-user"></i> Scientist Added <br/> {props.cart.length}</h3>
            <h4>Total Cost: <br/> ${total.toFixed(2)}</h4>
            <div>
                {
                    cart.map(e => <li key ={e.id}>{e.name}</li>)
                }
            </div>
            <button className="btn btn-danger">Buy Now</button>
        </div>
    );
};

export default Cart;