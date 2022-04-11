import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ShowTask from "./components/ShowTask";

export default function App() {
  return (
    <div className="App">
      <h1>Todo React</h1>
      <h2>Project 3</h2>
      <p>I really need coffee.</p>
      <ShowTask />
    </div>
  );
}
