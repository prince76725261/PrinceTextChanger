import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpConvert = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
  };
  const handleLowConvert = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };
  const handleRdConvert = () => {
    let newText1 = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText1);
  };
  const handleClear = () => {
    let newText1 = "";
    setText(newText1);
  };
  function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <form className="text-form">
          <textarea
            className="text-input"
            id="textInput"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
          />
        </form>
        <div className="button-container d-flex justify-content-start mt-3">
          <button
            type="button"
            className="btn-primary"
            onClick={handleUpConvert}
          >
            <i className="fas fa-arrow-up"></i> Convert To Uppercase
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleLowConvert}
          >
            <i className="fas fa-arrow-down"></i> Convert To Lowercase
          </button>
          <button
            type="button"
            className="btn-primary mx-20"
            onClick={handleRdConvert}
          >
            <i className="fas fa-file-alt"></i> Convert To Readable Form
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleClear}
          >
            <i className="fas fa-times"></i> Clear
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="container-summary" style={{ marginLeft: "20px" }}>
        <h2>Your Text Summary</h2>
        <p>
          Number Of Characters: {text.length} And Words: {countWords(text)}
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something To Preview"}</p>
      </div>
    </>
  );
}
