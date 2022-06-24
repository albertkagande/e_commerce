import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/Product'
import Slider from './components/Slider'
import Hero from './components/Hero'



function App() {
  return (
    <div className="bg-white w-full h-screen">
      <Navbar />
      <Hero />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
