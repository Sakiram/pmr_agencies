import React from 'react';
import './About.css';
import dalmia from '../cp imgs/dalmia.png';
import ultratech from '../cp imgs/ultratech.png';
import tata from '../cp imgs/tatatmt.png';
import jsw from '../cp imgs/jswtmt.jpeg';
import ramco from '../cp imgs/ramco.jpeg';
import delivery from '../cp imgs/delivery.webp';
import ceme from '../cp imgs/cement.jpg';
import rebar from '../cp imgs/rebar.jpeg';
import shop from '../cp imgs/shop.jpg';
import { Link } from 'react-router-dom';

const brands = [
    { name: 'Dalmia', image: dalmia },
    { name: 'UltraTech', image: ultratech },
    { name: 'Tata', image: tata },
    { name: 'JSW', image: jsw },
    { name: 'Ramco', image: ramco},
];

const About = () => {
    return (
        <div>

            <div className="acontainer">
                <h1 className="slogan">About & Services</h1>
                <p className='para'>PMR Agencies stands out as a premier supplier in the construction sector, focusing on the distribution of essential building materials like cement and re-bar, along with related construction products. Our offerings encompass a wide array of high-quality materials crucial for industrial, general, and architectural construction needs.

                    Our commitment lies in providing top-notch cement, reliable re-bar, and other essential construction supplies that meet stringent industry standards. We prioritize quality and durability, ensuring that our clients receive products that excel in performance and reliability for their construction projects.

                    With PMR Agencies, you can count on a trusted partner delivering superior construction materials and comprehensive solutions tailored to your specific project requirements. We are dedicated to supporting the success of industrial, general, and architectural construction endeavors through our dependable product offerings and exceptional service.</p>
                <div className="boxes">
                    <div className="box">
                        <img src={ceme} alt="Cement Image" />
                        <p>Cement is the foundation of every construction project. We offer a wide range of high-quality cement products to meet your needs.</p>
                    </div>
                    <div className="box">
                        <img src={rebar} alt="Rebar Image" />
                        <p>Rebar is essential for reinforcing concrete structures. Our rebar is sourced from the best suppliers to ensure durability and strength.</p>
                    </div>
                    <div className="box">
                        <img src={shop} alt="Shop Image" />
                        <p>Visit our shop to explore our extensive range of cement and rebar products. Our knowledgeable staff is ready to assist you.</p>
                    </div>
                </div>

                <div className='adbox'>
                    <img src={delivery} alt="title" className="ad-box-image" />
                    <div className="ad-box-content">
                        <h1>FOR ORDERS ABOVE RS.50,000....</h1>
                        <p>GET FREE DELIVERY </p>
                        <p>AND AVAIL 15% DISCOUNT</p>
                    </div>

                </div>
            </div>

            
            <div className="categories-container" style={{ marginBottom: '30px' }}>

                <br></br>


                <div className="title-align">
                    <h1 className="he1" style={{ marginBottom: '5px' }}>Trending Brand Partners</h1>
                </div>
                <div className="brands">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-logo">
                            <Link to={`/brands/${brand.name.toLowerCase()}`}>
                                <img src={brand.image} alt={brand.name} />
                            </Link>
                        </div>
                    ))}
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default About;

