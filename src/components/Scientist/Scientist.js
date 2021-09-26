import React from 'react';
import "./Scientist.css"

const Scientist = (props) => {
    const{name, age, country, salary, picture, famous} = props.scientist;
    return (      
        <div className="border scientist m-2 text-light shadow">       
            <div className="">               
                <div>
                    <img className="img-fluid p-4" src={picture} alt="" />
                </div>
                <div>
                    <h5><span className="fw-bold">Name</span>: {name}</h5>
                    <h5><span className="fw-bold">Age</span>: {age}</h5>
                    <h5><span className="fw-bold">Country</span>: {country}</h5>
                    <h5><span className="fw-bold">Salary</span>: ${salary}</h5>
                    <h5><span className="fw-bold">Famous for</span>: {famous}</h5>
                    <button onClick={() => props.handleAddToCard(props.scientist)} className="btn btn-light text-dark mb-2"><i className="fas fa-shopping-cart me-2"></i>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Scientist;