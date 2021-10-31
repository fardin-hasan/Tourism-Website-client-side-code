import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div id='contact' className='m-5'>
            <h1 className='text-center text-dark m-5'>Contact Us Here</h1>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="email" placeholder="Enter Your Email Here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" placeholder="Type Your Message Here" rows={3} />
                </Form.Group>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning px-5  ">Submit</button>
                </div>


            </Form>
        </div>
    );
};

export default ContactUs;