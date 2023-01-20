import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { books } from "../data"

const BookInfo = ({ books }) => {
    return(
<div id="books__body">
    <main id="books__main">
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <Link to='/books' className="book__link">
                        <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                    <Link to="/books">
                        <h2 className="">Books</h2>
                    </Link>
                </div>
            </div>
        </div>
    </main>
</div>
    )
}

export default BookInfo 