import React, {useState}from 'react'


export default function TextForm(props){

// To UpperCase !
const handdleUpClick = () =>{
  let newText = text.toUpperCase(); 
  setText(newText);
}

//  To LowerCase !
const handdleLcClick = () =>{
  let newText = text.toLowerCase(); 
  setText(newText);
}

//  To Clear Text !  
const handdleClearClick = () =>{
  let newText = ""; 
  setText(newText);
}

//Copy All Text
const handdleCopyAllClick=()=>{
  let text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,99999999999999);
  navigator.clipboard.writeText(text.value);
}

// HandleExtraSpaces

const HandleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}


// -------->
const handleOnChange = (event) =>{
  setText(event.target.value);
}



const [text, setText] = useState('Amir Is A Good Boy 👦'); // Enter Text Here
// text = "Amir Suhail"  // Wrong Method !
// setText("Amir Suhail"); // Right Method !
return(
  <>
<div>
<h2>{props.heading}</h2>
<div className="mb-2 p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
 <i>
  <textarea className="form-control text-dark bg-light" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
</i>
</div>
<div>
  <button className="btn btn-primary mx-1 mb-2 my-3" onClick={handdleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1 mb-2  my-3" onClick={handdleLcClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-1 mb-2 my-3" onClick={handdleClearClick}>Clear All</button> 
  <button className="btn btn-primary mx-1 mb-2 my-3" onClick={handdleCopyAllClick}>Copy All Text</button> 
  <button className="btn btn-primary mx-1 mb-2 my-3" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
</div>
</div>

<div className='containor my-3'>
  <h3>Your Text Summary</h3>
  <p>{text.split(" ").length} Words And {text.length} Characters</p>
  <p>{0.008*text.split(" ").length} Minutes Read</p>
  <h3>Preview</h3>
  <p> {text} </p>
</div>
</>
    )
}


