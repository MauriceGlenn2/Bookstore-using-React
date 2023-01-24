import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../Components/ui/Book";
import Price from "../Components/ui/Price";
import Rating from "../Rating";


const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams();
    const book = books.find((book) => +book.id == +id); //+ converts into number
    
    //remove book from cart
   // function removeBook(book) {

    //adding book to cart
    function addBookToCart(book) {
        addToCart(book);
    }

    //checking to see if book is already added to cart
    function bookExistsOnCart(){
       return cart?.find(book => book.id === +id)
    }

    //console.log( book );
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to='/books' className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img className="book__selected--img" src={book.url} alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                    <div className="book__summary">
                                        <h3 className="book__summary--title">
                                            Sumary
                                        </h3>
                                        <p className="book__summary--para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora, autem distinctio possimus ipsa ullam eum pariatur quam dolores aliquam architecto mollitia iusto, consequatur a in explicabo aliquid tempore est!
                                        </p>
                                        <p className="book__summary--para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora, autem distinctio possimus ipsa ullam eum pariatur quam dolores aliquam architecto mollitia iusto, consequatur a in explicabo aliquid tempore est!
                                        </p>
                                    </div>
                                    {bookExistsOnCart() ? (
                                 <Link to={`/cart`} className="book__link">              
                                <button className="btn">Checkout</button> 
                                </Link> 
                                    ) : (
                                        <button className="btn" onClick={() => addBookToCart(book)}>
                                        Add to cart
                                    </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books_container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                         {books
                         .filter((book) => book.rating === 5 && +book.id !== +id)
                         .slice(0, 4)
                         .map(book => <Book book={book} key={book.id} />)
                         } 
                         {/* filters books making sure book selected is not in the recommended list  */}
                         </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo;