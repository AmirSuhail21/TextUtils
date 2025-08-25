import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

function App() { 
  const [mode, setmode] = useState('light') // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (messege , type)=>{
    setAlert({
          msg : messege,
          type : type
    })
  }
  const toggleMode = () =>{
    if(mode === 'light'){ 
      setmode('dark')
      document.body.style.backgroundColor = '#1e2c52';
      // document.body.style.color = 'white';
      showAlert("Dark Mode Has Been Enabled","success");

    }else{
      setmode ('light')
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light Mode Has Been Enabled","success");

    }
  }
  return (
    <>

  <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>

  <Alert alert = {alert}/>

<div classNameName="container my-3">
  <TextForm heading = "Enter The Text To Analyze Below" mode = {mode} /> 
  </div>

  
  {/* <About/> */}
  
  
    </>
  );
}
export default App;
