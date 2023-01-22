import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from './data.js';
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render = {() => <BookInfo books={books} />} />
        {/* :id for when you click a book in books, routes to the book */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// render is used to pass in props