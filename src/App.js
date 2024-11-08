import './App.css';
import Navbar from './component.js/Navbar';
import News from './component.js/News';
import Footer from './component.js/Footer';
import AboutUs from './component.js/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'


function App() {
  const[Mode,setMode]=useState("light");
  const[Text,setText]=useState("black");
  const toggleColor = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setText('white'); 
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText('black');
    }
  };
  
  return (
    <>
      <BrowserRouter>
        <Navbar toggleColor={toggleColor} mode={Mode} />
        <Routes>
          <Route path="/About" element={<AboutUs mode={Mode} />} />
          <Route path="/" element={<News mode={Mode} pagesize="12" />}/>
          <Route exact path="/business"  element={<News key="business" mode={Mode} category="business"/>}/>
          <Route exact path="/science"  element={<News key="science" mode={Mode} category="science"/>}/>
          <Route exact path="/Technology"  element={<News key="Technology" mode={Mode} category="Technology"/>}/>
          <Route exact path="/sports"  element={<News key="sports" mode={Mode} category="sports"/>}/>
          <Route exact path="/entertainment"  element={<News key="entertainment" mode={Mode} category="entertainment"/>}/>
          <Route exact path="/Footer/business" element={<News key="world" mode={Mode} category="business"/>}/>
          <Route exact path="/Footer/sports" element={<News key="sports" mode={Mode} category="sports"/>}/>
          <Route exact path="/Footer/science" element={<News key="science" mode={Mode} category="science"/>}/>

        </Routes>

        <Footer mode={Mode} textMode={Text} />
      </BrowserRouter>
    </>
  );
}

export default App;

