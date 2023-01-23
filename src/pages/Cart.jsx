import React from 'react'

const Cart = ({ cart, changeQuanity }) => {
    const total = () => {
        
    }
    const Subtotal = () =>{

    }
    return (
        <div id='books__body'>
            <div className="main" id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {/* for every item in the cart we want to add a new cart item  */}
                                {
                                   cart.map(book => {
                                    return (
                                        <div className="cart__item">
                                            <div className="cart__book">
                                                <img className='cart__book--img' src={book.url} alt="" />
                                                <div className="cart__book--info">
                                                    <span className='cart__book--title'>
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        {(book.salePrice || book.originalPrice).toFixed(2)}
                                                    </span>
                                                    <button className="cart__book--remove">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input type="number"
                                                 min={0} 
                                                 max={99} 
                                                 className='cart__input'
                                                 value={book.quantity}
                                                 onChange={(event) => changeQuanity(book, event.target.value)
                                                 } />
                                                {/* min can not enter anything lower, max no higher than, type=input type */}
                                            </div>
                                            <div className="cart__total">
                                                ${((book.salePrice || book.originalPrice)*(book.quantity)).toFixed(2)}
                                            </div>
                                        </div>
                                    )
                                   })     
                                }
                               
                            </div>
                        </div>
                        <div className="total">
                            <div className ='total__item total__sub-total'>
                                <span>Subtotal</span>
                                <span>$9.00</span>
                            </div>
                            <div className='total__item total__tax'>
                                <span>Tax</span>
                                <span>$1.00</span>
                            </div>
                            <div className='total__item total__price'>
                                <span>Total</span>
                                <span>$10.00</span>
                            </div>
                            <button className="button btn btn__checkout no-cursor"
                            onClick={() => alert(`Haven't got around to doing this :(`)}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart