import './App.css';
import Home from './mainComponents/Home'
import Footer from './mainComponents/Footer'
import Stars from './mainComponents/Stars';

function App() {
  return (
      <div className="main">
        <Stars />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
