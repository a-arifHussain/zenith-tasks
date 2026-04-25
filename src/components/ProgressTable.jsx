import React, { useEffect, useState } from "react";
import "./ProgressTable.css";
const ProgressTable = () => {
  const [totalHigh, setTotalHigh] = useState([]);
  const [completedHigh, setCompletedHigh] = useState([]);
  const [totalMedium, setTotalMedium] = useState([]);
  const [completedMedium, setCompletedMedium] = useState([]);
  const [totalLow, setTotalLow] = useState([]);
  const [completedLow, setCompletedLow] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("taskArray") !== null) {
      const taskArray = JSON.parse(localStorage.getItem("taskArray"));

      const High = taskArray.filter((task) => task.priority === "High");
      setTotalHigh(High);
      const Medium = taskArray.filter((task) => task.priority === "Medium");
      setTotalMedium(Medium);
      const Low = taskArray.filter((task) => task.priority === "Low");
      setTotalLow(Low);

      const comHigh = taskArray.filter(
        (task) => task.priority === "High" && task.isCompleted === true,
      );
      setCompletedHigh(comHigh);
      const comMed = taskArray.filter(
        (task) => task.priority === "Medium" && task.isCompleted === true,
      );
      setCompletedMedium(comMed);
      const comLow = taskArray.filter(
        (task) => task.priority === "Low" && task.isCompleted === true,
      );
      setCompletedLow(comLow);
    }
  }, []);

  return (
    <div>
      <div className="progressTable" id="project">
        <h3>Progress table</h3>
        <div className="highTask">
          <div className="progressTitle">
            <h5>High</h5>
            <h5>
              <span>{completedHigh.length}</span>/
              <span>{totalHigh.length}</span>
            </h5>
          </div>
          <progress
            value={completedHigh.length}
            max={totalHigh.length}
          ></progress>
        </div>
        <div className="mediumTask">
          <div className="progressTitle">
            <h5>Medium</h5>
            <h5>
              <span>{completedMedium.length}</span>/
              <span>{totalMedium.length}</span>
            </h5>
          </div>
          <progress
            value={completedMedium.length}
            max={totalMedium.length}
          ></progress>
        </div>
        <div className="lowTask">
          <div className="progressTitle">
            <h5>Low</h5>
            <h5>
              <span>{completedLow.length}</span>/<span>{totalLow.length}</span>
            </h5>
          </div>
          <progress
            value={completedLow.length}
            max={totalLow.length}
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default ProgressTable;
