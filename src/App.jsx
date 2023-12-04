import { useSelector } from "react-redux";
import "./App.css";

// testing the store
function App() {
  const data = useSelector((state) => state.data);

  const elements = data.map((exe, index) => (
    <div className="card">
      <h1>
        {index + 1} - {exe.name}
      </h1>

      {exe.force !== null && <h2>force: {exe.force}</h2>}

      {/* <h3>{exe.level}</h3> */}
      <h3>primaryMuscles: </h3>
      {exe.primaryMuscles.length > 0 ? (
        <ul className="muscles">
          {exe.primaryMuscles.map((muscle) => (
            <li>{muscle}</li>
          ))}
        </ul>
      ) : undefined}
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
