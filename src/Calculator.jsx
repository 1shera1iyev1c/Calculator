import React, { useState } from 'react';
import './index.css'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue === ' ' ? value : prevValue + value);
  };

  const handleClearButtonClick = () => {
    setDisplayValue(' ');
  };

  const handleEvaluate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <form name="calculator">
        <input
          type="text"
          name="display"
          disabled
          placeholder="0"
          className="header"
          value={displayValue}
        />
        <div className="header-item">
          <div className="list">
            <input
              name="seven"
              type="button"
              value="7"
              className="link yetti"
              onClick={() => handleButtonClick('7')}
            />
            <input
              name="eight"
              type="button"
              value="8"
              className="link sakkiz"
              onClick={() => handleButtonClick('8')}
            />
            <input
              name="nine"
              type="button"
              value="9"
              className="link toqqiz"
              onClick={() => handleButtonClick('9')}
            />
            <input
              name="times"
              type="button"
              value="/"
              className="operator link bolish"
              onClick={() => handleButtonClick('/')}
            />
          </div>
          <div className="list">
            <input
              name="four"
              type="button"
              value="4"
              className="link tor"
              onClick={() => handleButtonClick('4')}
            />
            <input
              name="five"
              type="button"
              value="5"
              className="link besh"
              onClick={() => handleButtonClick('5')}
            />
            <input
              name="six"
              type="button"
              value="6"
              className="link olti"
              onClick={() => handleButtonClick('6')}
            />
            <input
              name="times"
              type="button"
              value="*"
              className="operator link kopay"
              onClick={() => handleButtonClick('*')}
            />
          </div>
          <div className="list">
            <input
              name="one"
              type="button"
              value="1"
              className="link bir"
              onClick={() => handleButtonClick('1')}
            />
            <input
              name="two"
              type="button"
              value="2"
              className="link ikki"
              onClick={() => handleButtonClick('2')}
            />
            <input
              name="three"
              type="button"
              value="3"
              className="link uch"
              onClick={() => handleButtonClick('3')}
            />
            <input
              name="times"
              type="button"
              value="-"
              className="operator link minus"
              onClick={() => handleButtonClick('-')}
            />
          </div>
          <div className="list">
            <input
              name="."
              type="button"
              value="."
              className="link tochka"
              onClick={() => handleButtonClick('.')}
            />
            <input
              name="zero"
              type="button"
              value="0"
              className="link nol"
              onClick={() => handleButtonClick('0')}
            />
            <input
              name="times"
              type="button"
              value="+"
              className="link plus"
              onClick={() => handleButtonClick('+')}
            />
            <input
              name="times"
              type="button"
              value="c"
              className="item red link"
              onClick={handleClearButtonClick}
            />
          </div>
        </div>
        <input
          name="assignment"
          type="button"
          value="="
          className="javob"
          onClick={handleEvaluate}
        />
      </form>
    </div>
  );
};

export default Calculator;
