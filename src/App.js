import React, {useState, useEffect} from 'react';
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Qualification from './Pages/Qualification';
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact.jsx";
import Frontend from "./Pages/Frontend";
import Backend from "./Pages/Backend";
import Mailme from "./Pages/Mailme";
import Goback from "./Pages/Goback";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

const App = () => {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, [])
  
  return (
    <BrowserRouter>
    {
      loading ?
      <div className='loading'>
        <DotLoader color={"cyan"} loading={loading} size={50} />
      </div>
      :
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/qualification" element={<Qualification />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/frontend" element={<Frontend />}/>
        <Route path="/backend" element={<Backend />}/>
        <Route path="/mailme" element={<Mailme />}/>
        <Route path="/goback" element={<Goback />}/>
      </Routes>
    }
    </BrowserRouter>
  );
}

export default App;

