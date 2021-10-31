import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='mb-5' >
            <h1 className='text-dark text-center mx-5 my-5 '>Popular Destinations </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 m-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Packages;