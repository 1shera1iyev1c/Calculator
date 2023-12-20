import React, { useState } from 'react';

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
              name="times"
              type="button"
              value="/"
              className="operator link bolish"
              onClick={() => handleButtonClick('/')}
            />
          </div>
          <div className="list">
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
