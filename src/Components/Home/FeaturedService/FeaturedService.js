import React from 'react';
import featured from '../../../images/featured.png';
import mechine from "../../../images/digital x-ray.png"
import './FeaturedService.css'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid featured-img" src={mechine} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Digital Machines <br/> for your treatment</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn button">Learn More</button>
                    </div>
                </div>
            </div>
         </section>
    );
};

export default FeaturedService;