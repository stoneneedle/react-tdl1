import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./styles.css";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container fluid>
          <div className="p-3">
            <h1>React-TDL</h1>
            <p className="tdl-item-text">
              Make your to-do list by adding tasks below.
            </p>
          </div>
          <ShowTask />
        </Container>
      </div>
    </>
  );
}
