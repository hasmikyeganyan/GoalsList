function GoalsList(props) {
  return (
    <ul className="list-group">
      {props.goals.map((goal) => (
        <li
          key={goal + Math.random()}
          className="list-group-item text-light bg-secondary"
        >
          {goal}
        </li>
      ))}
    </ul>
  );
}
export default GoalsList;
