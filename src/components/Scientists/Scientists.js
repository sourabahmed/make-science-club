import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import './Scientists.css'

const Scientists = () => {
    const[scientists, setScientists] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("./scientists.json")
        .then(res => res.json())
        .then(data => setScientists(data))
      },[])

      const handleAddToCard = (scientist) =>{
        const newCart = [...cart, scientist];
        setCart(newCart);
      }
    return (
        <div className="row m-5">
          <div className="col-9">
              <div className="grid">
              {
                scientists.map(scientist => <Scientist
                key={scientist.id}
                scientist={scientist}
                handleAddToCard={handleAddToCard}
                ></Scientist>)
              }
              </div>
          </div>
          <div className="col-3 border-start">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Scientists;