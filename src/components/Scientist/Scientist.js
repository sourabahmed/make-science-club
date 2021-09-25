import React from 'react';
import "./Scientist.css"

const Scientist = (props) => {
    const{name, age, country, salary, picture, famous} = props.scientist;
    return (      
        <div className="border m-2 shadow-sm rounded">       
            <div>               
                <div>
                    <img className="img-fluid p-4 " src={picture} alt="" />
                </div>
                <div>
                    <h5><span className="fw-bold">Name</span>: {name}</h5>
                    <h5><span className="fw-bold">Age</span>: {age}</h5>
                    <h5><span className="fw-bold">Country</span>: {country}</h5>
                    <h5><span className="fw-bold">Salary</span>: {salary}</h5>
                    <h5><span className="fw-bold">Famous for</span>: {famous}</h5>
                </div>
            </div>
        </div>
    );
};

export default Scientist;