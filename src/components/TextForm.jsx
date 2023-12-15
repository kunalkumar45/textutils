import React, { useState } from "react";
export default function TextForm(props) {
  document.title = "TextUtils | Home";
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase!", "success");
  };
  const toClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Clipboard Copy!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
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
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-3"
            onClick={handleUpClick}
          >
            Convert Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-3"
            onClick={handleLoClick}
          >
            Convert Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-3"
            onClick={toClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-3"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3 mx-3"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          word and {text.length} Character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes to Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
