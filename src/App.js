import "./App.css";
import NavBar from "./components/NavBar";
import TaskBody from "./components/TaskBody";
import OtherDataBody from "./components/OtherDataBody";

function App() {
  return (
    <>
      <NavBar />
      <div className="mainBody">
        <TaskBody />
        <OtherDataBody />
      </div>
    </>
  );
}

export default App;
