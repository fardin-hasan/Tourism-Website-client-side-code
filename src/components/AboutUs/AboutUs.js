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
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum, qui autem possimus, debitis asperiores recusandae pariatur voluptatum dolorem vero molestias saepe a sequi esse aliquam perferendis ex iure. Qui!</p>
                        <div>
                            <button className='btn btn-warning px-5 text-white'>Find More</button>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <img className='about-img  p-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsKoZIQuN1dtVBBSYFiM25Gf47jO0Mg_g2YEeDM42zEOpRpwxpHQoeLH0bkF6D4bFoDs&usqp=CAU" alt="..." />
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
                                <h5 className="card-title text-center opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam suscipit sunt blanditiis cum provident, sequi quibusdam libero, quasi odit dolores ad! Iste fugit quidem ducimus consequatur et iusto voluptas cupiditate?</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeSfAaPteOGe1hdi2YejCI0HeWFatf2NS1JD3SYNBGaJGQSHFy02CyYCWfpDyxQmtyic&usqp=CAU" className=" review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Muhammad ali</h5>
                                <h5 className="card-title text-center opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam suscipit sunt blanditiis cum provident, sequi quibusdam libero, quasi odit dolores ad! Iste fugit quidem ducimus consequatur et iusto voluptas cupiditate?</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tEKfs-iR-55BFghJssqFrfgu3DBomvJp2V2GelFcRiZ2k5vOY0bJ8o1eEEp5EH7pgRQ&usqp=CAU" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Mike  Pattison </h5>
                                <h5 className="card-title text-center opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam suscipit sunt blanditiis cum provident, sequi quibusdam libero, quasi odit dolores ad! Iste fugit quidem ducimus consequatur et iusto voluptas cupiditate?</h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>



    );
};

export default AboutUs;
