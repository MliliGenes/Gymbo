import { useSelector } from "react-redux";
import "./styles/App.css";

// testing the store
function App() {
  const workouts = useSelector((state) => state.workouts);

  const elements = workouts.map((exe, index) => (
    <div className="card">
      <h1>
        {index + 1} - {exe.name}
      </h1>

      {exe.force !== null && <h2>force: {exe.force}</h2>}

      {/* <h3>{exe.level}</h3> */}
      <h3>Muscles: </h3>
      <div className="muscles">
        {exe.primaryMuscles.length > 0 &&
          exe.primaryMuscles.map((muscle) => (
            <div className="muscle">{muscle}</div>
          ))}
        {exe.secondaryMuscles.length > 0 &&
          exe.secondaryMuscles.map((muscle) => (
            <div className="muscle">{muscle}</div>
          ))}
      </div>

      <h3>instructions: </h3>
      <ol>
        {exe.instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
    </div>
  ));

  return (
    <>
      <div className="title">{elements.length} Exercises</div>
      <div className="container">{elements}</div>
    </>
  );
}

export default App;
