import logo from './logo.svg';
import './App.css';
import Product from './products/product';
import ProductListing from './products/productListing';


function App() {
  return (
    <div className="App">
      <h1>CÀ CHỚN'S SHOP</h1>
      <h4>Buy thì Buy, không Buy thì Bye!!!</h4>
      <ProductListing />
    </div>
  );
}

export default App;
