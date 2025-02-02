import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import "./About.css";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMyStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 0 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleToggle(0)}
            >
              Collapsible Group Item #1
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeIndex === 0 ? "show" : ""
            }`}
          >
            <div className="accordion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 1 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleToggle(1)}
            >
              Collapsible Group Item #2
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeIndex === 1 ? "show" : ""
            }`}
          >
            <div className="accordion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 2 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleToggle(2)} // Toggle item 2
            >
              Collapsible Group Item #3
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeIndex === 2 ? "show" : ""
            }`}
          >
            <div className="accordion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={toggleMyStyle}>
            {btntext}
          </button>
        </div>
        {/* <div className="mt-3">
          <Link to="/" className="btn btn-secondary">
            Go to TextForm
          </Link>
        </div> */}
      </div>
    </>
  );
}
