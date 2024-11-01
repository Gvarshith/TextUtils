import React, { useState } from "react";

export default function TextForm(props) { 
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clear = () => {
    setText("");
  };
  const copy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied" , "success"); 
  };
  const space = () => {
    let newText = text.replace(/\s+/g, ' ').trim(); // Removes extra spaces
    setText(newText);
  };
 
  

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
        <h1 className="my-2">Enter the text to analyse</h1>
          <textarea
            className="form-control"
            id="myBox"
            style={{ backgroundColor: props.mode=== 'light' ? '#BFC0C0':'#333333',
              color:props.mode=== 'light' ? 'black':'white',
            }}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUp}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLow}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={space}>
          Clear the extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
        {text.trim() === '' ? 0 : text.trim().split(/\s+/).length } words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
