import Navbar from "./components/Navbar"
import TextFrom from "./components/TestFrom"
import './App.css';
// import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,

//   Routes,
//   Route,
 

// } from "react-router-dom"
// import Home from "./components/Home";

function App() {

  let [mode, setMode] = useState("light")
  let [alertText, setAlertText] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "#312c2c";
      showAlert("dark mode enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    console.log("product uploading..");
    setAlertText({
      type: type,
      message: message,
    })

    setTimeout(() => {
      setAlertText(null)
    }, 3000);

  }

  return (
    <>

    {/* <Router> */}
      <Navbar title="TechMaker" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alertText} />
      <div className="container my-3" >
      <TextFrom title="Enter text" mode={mode} showAlert={showAlert} />
        {/* <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About title="About us" />}/>
          <Route exact path="/product" element={<TextFrom title="Enter text" mode={mode} showAlert={showAlert} />}/>
            
        
          
        
         
        </Routes> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
