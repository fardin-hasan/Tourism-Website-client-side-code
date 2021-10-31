import React from 'react';
import './WhyTravel.css';

const WhyTravel = () => {
    return (
        <div className='my-5 mx-5'>
            <div>
                <h1 className='text-center '>Why Travel With Destination ?</h1>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://www.bookaways.com/Content/images/resource/feature-1.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We Have 1000+ WordWide Guides</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a8eb982ab7baaed9a70b95%2F0x0.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We Have 100% Trusted Tour Agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/12/cover-for-50-Amazing-Travel-Experiences-Around-The-World.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">12+ Years of Travel Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhhTnn92IWjOSj_Oc_XomiBU68rsPc-xVAIdgGtrhTl0CYdpHS4azmGlR2Qcc5ChULI0&usqp=CAU" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">100% of Our Travelers are Happy</h5>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default WhyTravel;