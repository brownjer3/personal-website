// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </>
      </Router> */}
      <Footer />
    </div>
  );
}

export default App;
