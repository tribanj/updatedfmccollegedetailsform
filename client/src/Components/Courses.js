import React, { useState } from "react";
import "../Form.css";
const MultiOptionsInput = ({ options, setOptions }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to add an option to the array
  const addOption = (e) => {
    if (inputValue.trim() !== "" && !options.includes(inputValue)) {
      setOptions([...options, inputValue]);
      setInputValue("");
      e.preventDefault();
    }
  };

  // Function to remove an option from the array
  const removeOption = (e, option) => {
    const updatedOptions = options.filter((item) => item !== option);
    setOptions(updatedOptions);
    e.preventDefault();
  };

  return (
    <div>
      <div className="addon">
        <input
          type="text"
          placeholder="Enter an option"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add" onClick={addOption}>
          +
        </button>
      </div>{" "}
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option}
            <button onClick={(e) => removeOption(e, option)}>X</button>
          </li>
        ))}
      </ul>
      {/* <button onClick={submitOptionsToDatabase}>Submit to Database</button> */}
    </div>
  );
};

export default MultiOptionsInput;
