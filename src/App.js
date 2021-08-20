import logo from './logo.svg';
import './App.css';
import Product from './products/product';
import ProductListing from './products/productListing';
import cat from './assets/images/cat.jpg'

function App() {
  return (
    <div className="App">
      <h1>CÀ CHỚN'S SHOP</h1>
      <img id="cat" src={cat} ></img>
      <h4>Buy thì Buy, không Buy thì Bye!!!</h4>
      <ProductListing />
    </div>
  );
}

export default App;
