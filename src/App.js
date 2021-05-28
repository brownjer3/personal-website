import './App.css';
import Home from './mainComponents/Home'
import Footer from './mainComponents/Footer'

function App() {
  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="main">
        <Home />
        <Footer />
      </div>
    </div>

  );
}

export default App;
