import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from './data.js';
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])
// Adding book to cart
function addToCart(book){
 setCart([...cart, {...book, quanity: 1 }])
}

function changeQuantity(book, quanity){
  setCart(
    cart.map((item) => item.id === book.id
    ? {
        ...item,
        quanity: +quanity,
    }
    : item
  )
  )
}

useEffect(() => {
  console.log(cart);
}, [cart]);
// taking all properities from the book and adding quantities to them



  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
        {/* :id for when you click a book in books, routes to the book */}
        <Route path="/cart/" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// render is used to pass in props