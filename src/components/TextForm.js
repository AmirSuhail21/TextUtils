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
<div className='d-grid gap-2 col-6 mx-auto'>
  <button className="btn btn-primary " onClick={handdleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary" onClick={handdleLcClick}>Convert To Lowercase</button>
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
