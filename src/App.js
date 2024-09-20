import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import CardSection from "./components/CardSection";
import CardMain from "./components/CardMain";
import Review from "./components/Review";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Aquatic from "./components/Aquatic";
import Citrus from "./components/Citrus";
import Aromatic from "./components/Aromatic";
import Woody from "./components/Woody";
import Floral from "./components/Floral";
import Spicy from "./components/Spicy";
import Fruity from "./components/Fruity";
import Oriental from "./components/Oriental";
import Cart from "./components/Cart";
import './App.css';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={
           <>
              <Banner/>
              <Card/>
              <CardSection/>
              <CardMain/>
              <Review/>
              <Footer/>
           </>
           }/>
          <Route path='/aquatic'element={<Aquatic/>}/>
          <Route path='/citrus'element={<Citrus/>}/>
          <Route path='/aromatic'element={<Aromatic/>}/>
          <Route path='/woody'element={<Woody/>}/>
          <Route path='/floral'element={<Floral/>}/>
          <Route path='/spicy'element={<Spicy/>}/>
          <Route path='/fruity'element={<Fruity/>}/>
          <Route path='/oriental'element={<Oriental/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes> 
      
    </div>
  );
}

export default App;
