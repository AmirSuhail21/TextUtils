import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState('light') // wheather dark mode is enable or not
  const toggleMode = () =>{
    if(mode === 'light'){ 
      setmode('dark')
      document.body.style.backgroundColor = 'gray';
      // document.body.style.color = 'white';

    }else{
      setmode ('light')
      document.body.style.backgroundColor = 'white';
            // document.body.style.color = 'black';

    }
  }
  return (
    <>

  <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>


<div className="container my-3">
  <TextForm heading = "Enter The Text To Analyze Below" mode = {mode} /> 
  </div>

  
  {/* <About/> */}

    </>
  );
}
export default App;
