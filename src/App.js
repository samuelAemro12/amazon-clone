import './App.css';
import Header from '../src/components/Header/Header.js';
import CarouselEffect from './components/Carousel/Carousel.js';
import Category from '../src/components/Category/Category.js'
import Product from './components/Product/Product.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselEffect/> 
      <Category/>
      <Product/>
    </div>
  );
}

export default App;
