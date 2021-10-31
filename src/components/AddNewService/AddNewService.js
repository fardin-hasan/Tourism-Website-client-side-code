import React from 'react';
import { useForm } from "react-hook-form";


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = dat => {
        console.log(dat);
        fetch('http://localhost:5000/destination', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dat)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
            })

    };

    return (
        <div>

            <div className='col-md-6 col-sm-6 m-auto'>
                <h1 className='my-5 text-center opacity-75'>Add A New package Below</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mx-3 reg-form text-center   '>
                    <input  {...register("name", { required: true })} placeholder='Add Package Name Here' />
                    <input type="url" {...register("img", { required: true })} placeholder='Add Image URL Here' />

                    <input type="number" {...register("rating", { required: true })} placeholder='Add Ratings Here' />
                    <input type="text" {...register("description", { required: true })} placeholder='Add Package Description Here' />
                    <input type="text" {...register("tourTime", { required: true })} placeholder='Add Tour Time Here' />
                    <input type="submit" className="btn btn-primary" />

                </form>
            </div>
        </div>
    );
};

export default AddNewService;