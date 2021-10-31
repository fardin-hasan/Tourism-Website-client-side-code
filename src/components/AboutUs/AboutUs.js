import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='mb-5'>

            <div className='text-center m-5'>
                <h1>About Destination</h1>
            </div>

            <div className='row'>
                <div className="col-md-6 m-auto">
                    <div className=" m-5 w-75 ">
                        <h1 className="card-title">Worlds Best Travel Agency Company Since 2008.</h1>
                        <p className="card-text">Travel is a leader in the global travel technology.We provide staff travel solutions for online, interline, and CoBus/Duty travel, corporate hotel compliance management, and more while reducing costs and automating processes. To find new markets for our exceptional travel solutions and to build a team of creative minds who are passionate about technology and travel.</p>
                        <div>
                            <button className='btn btn-warning px-5 text-white'>Find More</button>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <img className='about-img  p-2 ' src="https://www.aheadrm.com/wp-content/uploads/2018/04/package-allotment.jpg" alt="..." />
                </div>


            </div>
            <div>
                <div className=' my-5'>
                    <h4 className='text-center  opacity-50'>REVIEWS & TESTIMONIALS</h4>
                    <h1 className='text-center'>Top Reviews For Destination</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGzfBYGMshXoVqphprIdwIKYhrk6y0sdSCg&usqp=CAU" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Mike  Tyson </h5>
                                <h5 className="card-title text-center opacity-75">We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & beautiful!....Thanks so much for finding the perfect spot for us for spring break :)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeSfAaPteOGe1hdi2YejCI0HeWFatf2NS1JD3SYNBGaJGQSHFy02CyYCWfpDyxQmtyic&usqp=CAU" className=" review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Muhammad ali</h5>
                                <h5 className="card-title text-center opacity-75">Thank you again for all of your help planning our trip to Germany and Austria! We are still talking about how it truly was a trip of a lifetime. I was worried about planning a trip for ages 9 to 78, but you took the stress away and helped create a wonderful travel experience. </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tEKfs-iR-55BFghJssqFrfgu3DBomvJp2V2GelFcRiZ2k5vOY0bJ8o1eEEp5EH7pgRQ&usqp=CAU" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Mike  Pattison </h5>
                                <h5 className="card-title text-center opacity-75">Awesome trip to Greece!! Kelly Shea did a fantastic job planning our trip to Greece! I was recommended to Kelly by a friend who had Kelly plan a trip several years back. Kelly specializes in Greece and has many years of experience visiting as well as living there herself</h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>



    );
};

export default AboutUs;
