import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

// import {
//   BrowserRouter as Router, 
//   Routes,
//   Route,
//   } from "react-router-dom";

function App() { 
  const [mode, setmode] = useState('light') // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (messege , type)=>{
    setAlert({
          msg : messege,
          type : type
    })
          setTimeout(() => {
            setAlert(null);
          }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){ 
      setmode('dark')
      document.body.style.backgroundColor = '#1e2c52';
      // document.body.style.color = 'white';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title = "TextUtils - Dark Mode";

      // This Is A setIntervel - - - ->
      // setInterval(() => {
      //   document.title = "TextUtils Is A Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);

    }else{
      setmode ('light')
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light Mode Has Been Enabled","success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
    <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>

    <div className="container my-3">
      <TextForm heading = "Enter The Text To Analyze Below" showAlert = {showAlert} mode = {mode} />
      
    </div>

    {/* <Router>
        <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>

        

          <div className="container my-3">
                <Routes>
                        <Route path="/about" element = {<About />}>
                        </Route>
                              <Route path="/" element = {<TextForm heading = "Enter The Text To Analyze Below" showAlert = {showAlert} mode = {mode} /> }>    
                        </Route>
                </Routes>
         </div>

    </Router> */}
  </>
  );
}
export default App;
