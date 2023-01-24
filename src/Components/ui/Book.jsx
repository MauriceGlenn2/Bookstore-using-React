import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect }from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import Price from "./Price";

const Book = ({ book }) => {
    const [img, setImg] = useState();

    const mountedRef = useRef(true)

    useEffect(() => {
        const image = new Image();
        image.src = book.url
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current){
                    setImg(image);
                }
        }, 300)
    };
    return () => {
        // when component is unmounted
        mountedRef.current = false;
    }
})

    return (
        <div className="book">
            {img ? (
                    <>
                        <Link to={`/books/${book.id}`}>
                            <figure className="book__img--wrapper">
                                <img className="book__img" src={img.src} alt="" />
                            </figure>
                        </Link>
                        <div className="book__title">
                            <Link to={`/books/${book.id}`} className="book__title--link" >
                                id placed in app.js route path
                                {book.title}
                            </Link>
                        </div>
                        <Rating rating={book.rating} />
                        <Price salePrice={book.salePrice} orginalPrice={book.orginalPrice} />
                    </> 
                  )  : (
            <>
                <div className="book__img--skeleton"></div>
                <div className="skeleton book__title--skeleton"></div>
                <div className="skeleton book__rating--skeleton"></div>
                <div className="skeleton book__price--skeleton"></div>
            </>
                     )}
        </div>
    )
}

export default Book;

