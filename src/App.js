import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    setAlert(
      {
        msg: massage,
        type: type
      }
    )
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert('Dark Mode Has Enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Has Enabled', 'success')
    }

  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text Below" mode={mode} showAlert={showAlert} />}>
          </Route>
          <Route path="/about" element={<About mode={mode}/> }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
