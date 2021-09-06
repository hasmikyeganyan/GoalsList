import { useState } from "react";

function Form(props) {
  const [newGoal, setNewGoal] = useState("");

  const onChange = (event) => {
    setNewGoal(event.target.value);
  };

  const addGoal = () => {
    props.addGoal(newGoal);
    setNewGoal("");
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Course Goal</h5>
        <input
          onChange={onChange}
          placeholder="Enter your next goal"
          type="text"
          className="form-control"
          value={newGoal}
        />
        <br />
        <br />
        <button
          onClick={newGoal === "" ? null : addGoal}
          type="button"
          className="btn btn-dark"
        >
          Add Goal
        </button>
      </div>
    </div>
  );
}

export default Form;
