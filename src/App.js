import './App.css';
import Header from '../src/components/Header/Header.js';
import CarouselEffect from './components/Carousel/Carousel.js';
import Category from '../src/components/Category/Category.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselEffect/> 
      <Category/>
    </div>
  );
}

export default App;
