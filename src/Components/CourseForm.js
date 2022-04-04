import React, { useState } from "react";

import "./CourseForm.css";

const CourseForm = (props) => {
  const [enteredInput, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setIsValid(true);
      setInput(e.target.value);
    }
  };

  const submitChangeHandler = (e) => {
    e.preventDefault();
    if (enteredInput) {
      setIsValid(true);
      const submittedInput = {
        title: enteredInput,
        id: Math.random(),
      };
      props.onSubmitNow(submittedInput);
      setInput("");
    } else {
      setIsValid(false);
      //   alert("please enter vlue");
    }
  };
  return (
    <div>
      <form onSubmit={submitChangeHandler}>
        <p style={{ color: !isValid ? "red" : "black" }}>Course Goal</p>
        <input
          type="text"
          onChange={inputChangeHandler}
          value={enteredInput}
          style={{ borderColor: !isValid ? "red" : "black" }}
        />
        <button
          type="submit"
          className="btn"
          style={{ color: !isValid ? "red" : "black" }}
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
