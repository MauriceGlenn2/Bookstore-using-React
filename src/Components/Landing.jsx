import React from "react";
import { Link } from "react-router-dom";
import UnDrawBooks from "../assets/Undraw_Books.svg"



const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Americas most awarded online library platform</h1>
                        <h2>Find your dream book for <span className="purple">self-improvement</span></h2>
                        <Link to="#features">
                            <button className="btn">Browse Books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UnDrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing