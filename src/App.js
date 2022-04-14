import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./styles.css";
import ShowTask from "./components/ShowTask";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="p-3">
          <h1>React-TDL</h1>
          <h2>Project 3</h2>
          <p className="tdl-item-text">
            Make your to-do list by adding tasks below.
          </p>
        </div>
        <ShowTask />
      </div>
    </div>
  );
}
