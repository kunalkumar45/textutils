import React, { useState } from "react";


export default function TextForm(props) {
  {document.title='TextUtils | Home'}
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To Uppercase!', 'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To Lowercase!', 'success')
  };
  const toClear = () => {
    setText(" ");
    props.showAlert('Text Cleared!', 'success')
  };
  const handleCopy = () => {
    let text = document.getElementById('textarea')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Clipboard Copy!', 'success')
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra Space Removed!', 'success')
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <div className="my-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="textarea"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
          ></textarea>
          <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
            Convert Upper Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
            Convert Lower Case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={toClear}>
            Clear Text
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your Text Summary</h2>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>
          {text.split(" ").length} word and {text.length} Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      </div>

    </>
  );
}
