import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './Information.css'

const Information = () => {
    const { user } = useAuth();
    const { serviceid } = useParams();
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        const url = `https://haunted-labyrinth-83183.herokuapp.com/destinations/${serviceid}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);
    const onSubmit = data => {
        console.log(data);
        fetch('https://haunted-labyrinth-83183.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(data => {


                alert('Booked Successfully')
                reset();

            })
    };






    return (
        <div className='mb-5'>
            <div>
                <h1 className='text-dark my-5 text-center '>Detailed Information of {users.name} </h1>

            </div>
            <div className='row '>

                <div className="card mb-5  mt-2 col-md-8 col-sm-10   " >

                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={users.img} className=" info-img" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ">
                                <h5 className="card-title mt-5">{users.name}</h5>
                                <p className="card-text">{users.description}</p>
                                <h5 className='py-3'>Tour Length is {users.tourTime}</h5>
                                <h5 >Rating : {users.rating}</h5>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-2 mb-5 col-md-3 col-sm-8 border border-light m-auto  py-5 '>
                    <h3 className='text-dark opacity-75 pb-1 text-center'>Book This Tour</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-3 reg-form text-center   '>
                        <input defaultValue={user.displayName} {...register("name")} placeholder='Your Name' />
                        <input defaultValue={user.email} type="email" {...register("email")} placeholder='Your email' />
                        <input   {...register("package")} placeholder='Package Name' />
                        <input type="number" {...register("Phone")} placeholder='Phone' />
                        <input type="text" {...register("city")} placeholder='Your City' />
                        <input type="number" {...register("passport")} placeholder='Your Passport No' />
                        <input type="submit" className="btn btn-primary" />

                    </form>


                </div>




            </div>
        </div>

    );
};




export default Information;
