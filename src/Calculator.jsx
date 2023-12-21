import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(" ");

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) =>
      prevValue === " " ? value : prevValue + value
    );
  };

  const handleClearButtonClick = () => {
    setDisplayValue(" ");
  };

  const handleEvaluate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("∞");
    }
  };

  return (
    <div className="big">
      <div className="buttons">
        <button className="btn btn-light">
          <i className="fa-regular fa-eye"></i> Runtime
        </button>
        <button className="btn btn-light">
          <i className="fa-solid fa-code"></i> Constructor
        </button>
      </div>
      <br />

      <input
        type="text"
        name="display"
        disabled
        placeholder="0"
        className="fon"
        value={displayValue}
      />
      <br />
      <div className="sonlar">
        <div className="first d-flex justify-content-between">
          <button className="btn" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button className="btn" onClick={() => handleButtonClick("*")}>
            x
          </button>
          <button className="btn" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleButtonClick("+")}>
            +
          </button>
        </div>
        <div className="second d-flex justify-content-between gap-1">
          <button className="btn" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleButtonClick("9")}>
            9
          </button>
        </div>
        <div className="third d-flex justify-content-between gap-1">
          <button className="btn" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleButtonClick("6")}>
            6
          </button>
        </div>
        <div className="four d-flex justify-content-between gap-1">
          <button className="btn" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleButtonClick("3")}>
            3
          </button>
        </div>
        <div className="five d-flex justify-content-between gap-2 w-100">
          <button className="btn" onClick={handleClearButtonClick}>
            AC
          </button>
          <button className="btn" onClick={() => handleButtonClick(".")}>
            ,
          </button>
          <button className="btn w-75" onClick={() => handleButtonClick("0")}>
            0
          </button>
        </div>
        <div className="six">
          <button className="ravno btn" onClick={handleEvaluate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
