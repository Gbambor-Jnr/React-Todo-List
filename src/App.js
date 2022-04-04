import React, { useState } from "react";
import CourseForm from "./Components/CourseForm";
import "./App.css";
import CourseList from "./Components/CourseList";

const App = () => {
  const myGoals = [
    { title: "Cook Food", id: "e1" },
    { title: "Go Jogging", id: "e2" },
    { title: "Eat Sarah", id: "e3" },
  ];

  const [goals, setGoals] = useState(myGoals);

  const onSubmitNowChangeHandler = (newGoal) => {
    setGoals((prevGoal) => {
      // const lastGoals = [...prevState];
      // lastGoals.unshift({ title: newGoal, id: Math.random().toString() });
      // return lastGoals;
      return [newGoal, ...prevGoal];
    });
  };

  const deleteChangeHandler = (index) => {
    setGoals((prevGoals) => {
      let newGoal = [...prevGoals];
      newGoal.splice(index, 1);
      return newGoal;
    });
  };

  return (
    <div className="app-container">
      <CourseForm onSubmitNow={onSubmitNowChangeHandler}></CourseForm>
      {goals.length === 0 ? (
        <p style={{ color: "white" }}>Would You Like To Add Any Todo Here?</p>
      ) : (
        <CourseList items={goals} onDeleteNow={deleteChangeHandler} />
      )}
    </div>
  );
};

// onDeleteNow={deleteChangeHandler}

export default App;
