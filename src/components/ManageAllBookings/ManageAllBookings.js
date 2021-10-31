import React, { useEffect, useState } from 'react';
import './ManageAllBookings'

const ManageAllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://haunted-labyrinth-83183.herokuapp.com/manageAllBooking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handelDelete = id => {
        const proccess = window.confirm('Are You Sure')
        if (proccess) {
            fetch(`https://haunted-labyrinth-83183.herokuapp.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted SuccessFully')
                        const remainBooking = bookings.filter(booking => booking._id !== id);
                        setBookings(remainBooking)
                    }

                })
        }

    }

    return (
        <div>
            <div>
                <h1 className='text-center opacity-75 my-5 '>Manage All Bookings Here</h1>
            </div>
            <div>
                {
                    bookings.map(booking => <li key={booking._id} className=' col-md-12 col-sm-12 text-center list-group-item list-group-item-action list-group-item-secondary'>
                        <span className='text-dark pe-5'><b >User Name : </b> {booking.name} </span>  <span className='text-dark pe-5'><b> Package :</b> {booking.package} </span > <span className='text-dark pe-5'><b>City : </b> {booking.city} </span> <span className='text-dark pe-5'><b>Passport No : </b> {booking.passport}</span>
                        <button onClick={() => handelDelete(booking._id)} className='btn btn-danger'>Cancel Booking</button>

                    </li>)
                }

            </div>
        </div>
    );
};

export default ManageAllBookings;