// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.setAttribute('data-bs-theme', 'dark');
      showAlert('Dark mode enabled', 'success');
    }

    else {
      setMode('light');
      document.body.setAttribute('data-bs-theme', 'light');
      showAlert('Light mode enabled', 'success');

    }
  }

  const toggleBlue = () => {
    if (mode === 'light') {
      setMode('blue');
      document.body.setAttribute('data-bs-theme', 'blue');
      showAlert('BLue mode enabled', 'success');
    }

    else if (mode === 'blue') {
      setMode('light');
      document.body.setAttribute('data-bs-theme', 'light');
      showAlert('Light mode enabled', 'success');
    }
  }


  return (
    <>
      <HashRouter >
        <Navbar title="TextUtils App" mode={mode} toggleMode={toggleMode} toggleBlue={toggleBlue} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter the Text to Analyze" showAlert={showAlert} />
              }
            >
            </Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
