import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import Price from "./Price";

const Book = ({ book }) => {
    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img className="book__img" src={book.url} alt="" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link" >
                    {/* id placed in app.js route path */}
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price salePrice={book.salePrice} orginalPrice={book.orginalPrice} />
        </div>
    )
}

export default Book;

