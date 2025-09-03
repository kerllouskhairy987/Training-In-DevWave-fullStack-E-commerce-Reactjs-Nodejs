

import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ModeToggle } from './components/mode-toggle'
import  Products  from './components/products/Product'
import  ProductDetails  from './components/ProductDetails/ProductDetails'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from './pages/Register/SignUp';
import LogIn from './pages/LogIn/Login';


function App() {
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
