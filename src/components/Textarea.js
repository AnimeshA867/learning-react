import React ,{useState} from 'react'
import PropTypes from 'prop-types'

let temp="";
export default function Textarea(props){
    const [text,setText]=useState('');
    const handleUpClick =()=>{
        
        let a=text;
        
        setText(a.toUpperCase())
        props.showAlert("success","Text converted to uppercase");
    }
    const handleLowClick =()=>{
        
        let a=text;
        
        setText(a.toLowerCase())
        props.showAlert("success","Text converted to lowercase");
    }
    const handleOg =()=>{
        
        setText(temp);
        props.showAlert("success","Original Text Restored");
    }
    const handleOnChange=(event)=>{
        temp=event.target.value;
        setText(event.target.value);
    }
    const copyToClipboard =()=>{
        let val=document.getElementById("exampleFormControlTextarea1");
        val.select();
        val.setSelectionRange(0,9999);
        navigator.clipboard.writeText(val.value);
        console.log(val.value);
        props.showAlert("success","Copied to the clipboard");
    }
    // setText(props.text);

    
    return (
    <>
    <div className='text-center' style={{backgroundColor:props.mode==="dark"?'grey':'white',color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" col="4">{props.text}</textarea>
    </div>
    <div className='container d-flex justify-content-around'>

    <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    <button type="button" className="btn btn-primary" onClick={handleLowClick}>Convert to lower case</button>
    <button type="button" className="btn btn-primary" onClick={copyToClipboard}>Copy to clipboard</button>
    <button type="button" className="btn btn-primary" onClick={handleOg}>Original text</button>
    </div>
</div>
<div className="container my-4" style={{backgroundColor:props.mode==="dark"?'grey':'white',color:props.mode==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
</div>
    </>
);
}

Textarea.propsTypes={
    heading:PropTypes.string,
    text:PropTypes.string
}

Textarea.defaultProps={
    heading:"Enter heading here",
    text:"Enter your text here"
}