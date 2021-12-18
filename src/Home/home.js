import React from "react";
import Discover from "../assets/cc-discover-brands.svg";
import Paypal from "../assets/cc-paypal-brands.svg";
import Visa from "../assets/cc-visa-brands.svg";
import User from "../assets/user-circle-regular.svg";
import Master from "../assets/master.jpeg"
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <nav className="nav">
                <ul>
                    <li>TRIPS</li>
                    <li>RECENTLY VIEWED</li>
                    <li>BOOKINGS</li>
                </ul>
                <img src={User} alt="user" className="icon" />
            </nav>
            <hr />
            <main className="main">
                <div className="main-left">
                    <h3>Payment Information</h3>
                    <p><span className="grey">Choose your method of payment </span></p>
                    <img src={Master} alt="mastercard" className="mastercard"/>
                </div>
                <div className="main-right">
                    <div className="cards">
                        <img src={Visa} alt="" className="card-icon"/>
                        <img src={Discover} alt="" className="card-icon"/>
                        <img src={Paypal} alt="" className="card-icon"/>
                    </div>
                    <div className="form">
                        <div className="form-left">
                            <label>Credit card number</label>
                            <input type="text" value="432 5433 9382 1030" className="input"/>
                            <label>Security Code</label>
                            <input type="number" value="420" className="input"/>
                        </div>
                        <div className="form-right">
                            <label>Expiration date</label>
                            <input type="date" value="dd/mm/yyyy" className="input"/>
                            <label>Postal code</label>
                            <input type="number" value="1011" className="input"/>
                        </div>
                    </div>
                    <div>
                        <input type="radio" />
                        <label>Use this card for next time purchase</label>
                    </div>
                    <button className="add-card">Add card</button>
                </div>
            </main>
            <hr />
            <section className="section">
                <div className="left-section">
                    <p><strong>Subtotal</strong></p>
                    <p><strong>Estimated TAX</strong></p>
                    <p><strong>Promotional Code:</strong><span className="grey">Z4KXLM94</span></p>
                </div>
                <div className="right-section">
                    <p>#2,497.00</p>
                    <p>#119.64</p>
                    <p>#119.64</p>
                </div>
            </section>
            <hr />
            <section className="bottom">
                <button className="complete">Complete payment</button>
                <p><strong>Total:#2556.64</strong></p>
            </section>
        </div>
    )
}

export default Home;