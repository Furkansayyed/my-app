import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase is clicked !")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Done Converting to Upper Case' , 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Done Converting to Lower Case' , 'success');
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard' , 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed...' , 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    // const [text, setText] = useState('Enter Text Here')
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8" > </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>

                <button className="btn btn-primary mx-2" onClick={handleCopy} > Copy Text</button>

                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.length > 0 ? text.split(" ").length : '0' } Words {text.length} Characters</p>
                <p> {0.008 * text.split(" ").length}  Minutes to read </p>
                <h3>Preview</h3>
                <p> {text.length>0?text:'Enter text to Preview here'} </p>
                
            </div>
        </>
    )
}
