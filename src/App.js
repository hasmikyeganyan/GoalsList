import "./App.css";
import Form from "./components/Form";
import GoalsList from "./components/GoalsList";
import { useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (newGoal) => {
    setGoals([newGoal, ...goals]);
  };

  return (
    <div className="App">
      <Form addGoal={addGoal} />
      <GoalsList goals={goals} />
    </div>
  );
}

export default App;
