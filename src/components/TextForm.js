import React, {useState}from 'react'

export default function TextForm(props){

// To UpperCase !
const handdleUpClick = () =>{
  let newText = text.toUpperCase(); 
  setText(newText);
  props.showAlert("Convert To Uppercase","success");
}

//  To LowerCase !
const handdleLcClick = () =>{
  let newText = text.toLowerCase(); 
  setText(newText);
  props.showAlert("Convert To Lowercase","success");
}

//  To Clear Text !  
const handdleClearClick = () =>{
  let newText = ""; 
  setText(newText);
  props.showAlert("Clear All","success");
}

//Copy All Text
const handdleCopyAllClick=()=>{
  let text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,99999999999999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied All Text","success");
}

// HandleExtraSpaces

const HandleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Remove Extra Spaces","success");
}


// -------->
const handleOnChange = (event) =>{
  setText(event.target.value);
}



const [text, setText] = useState('Hello Amir , How Are You'); // Enter Text Here
// text = "Amir Suhail"  // Wrong Method!
// setText("Amir Suhail"); // Right Method!
return(
  <>
          <div className = 'container' style={{color : props.mode==='dark'?'white':'black'}}>
              <h2>{props.heading}</h2>
                    <div className="mb-2 p-3 ">
                          <i>
                                <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor : props.mode==='dark'?'gray':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                          </i>
                    </div>
                    
                    <div>
                          <button className="btn btn-success mx-1 mb-2 my-3" onClick={handdleUpClick}>Convert To Uppercase
                          </button>
                          <button className="btn btn-primary mx-1 mb-2  my-3" onClick={handdleLcClick}>Convert To Lowercase
                          
                          </button>
                          <button className="btn btn-danger mx-1 mb-2 my-3" onClick={handdleClearClick}>Clear All
                          
                          </button>
                          <button className="btn btn-success mx-1 mb-2 my-3" onClick={handdleCopyAllClick}>Copy All Text
                          
                          </button> 
                          <button className="btn btn-warning mx-1 mb-2 my-3" onClick={HandleExtraSpaces}>Remove Extra Spaces
                          </button>
                    </div>
          </div>

          <div className='container mb-2 p-3'  style={{color : props.mode==='dark'?'white':'black'}}>
                    <h3 >Your Text Summary </h3>
                    <p>{text.split(" ").length} Words And {text.length} Characters</p>
                    <p>{0.008*text.split(" ").length} Minutes Read</p>
                    <h3>Preview</h3>
                    <p> {text} </p>
          </div>
</>
    )
}


