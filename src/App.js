import "./styles.css";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

export default function App() {
  return (
    <>
      <Header />
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
    </>
  );
}
