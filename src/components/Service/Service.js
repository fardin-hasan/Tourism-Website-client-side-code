import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { name, img, description, _id } = service;
  return (

    <div className="col  ">
      <div className="card shadow-lg pb-3 mb-5 bg-body mx-5 card-border ">
        <img src={img} className="w-100 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p><b>Description :</b> {description.slice(0, 110)}</p>
          <div className='text-center'>
            <Link to={`/information/${_id}`}><button className=' btn btn-warning  '>Book Now</button></Link>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Service;