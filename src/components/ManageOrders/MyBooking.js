import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);


    useEffect(() => {
        fetch('https://haunted-labyrinth-83183.herokuapp.com/mybooking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            <h1 className='text-center opacity-75'>Your Bookings Mr {user.displayName}</h1>
            <h1>hey {booking.name}</h1>

        </div>
    );
};

export default MyBooking;