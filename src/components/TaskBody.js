import React, { useEffect, useState } from "react";
import "./TaskBody.css";
import TaskForm from "./TaskForm";
import CircularTaskProgress from "./CircularTaskProgress";
const TaskBody = () => {
  const [addIconBtnClick, setAddIconBtnClick] = useState(false);

  const [taskArray, setTaskArray] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    category: "",
    description: "",
    isCompleted: false,
  });

  useEffect(() => {
    if (localStorage.getItem("taskArray") !== null) {
      setTaskArray(JSON.parse(localStorage.getItem("taskArray")));
    }
  }, []);

  const handleTick = (e) => {
    const updatedArray = taskArray.map((todo, id) =>
      Number(e.target.value) === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo,
    );
    setTaskArray(updatedArray);
    localStorage.setItem("taskArray", JSON.stringify(updatedArray));
  };

  useEffect(() => {
    const completedtaskArray = taskArray.filter(
      (task) => task.isCompleted === true,
    );
    setTaskCompleted(completedtaskArray.length);
  }, [taskArray]);

  return (
    <>
      <div className="TaskBody" id="home">
        <div className="taskHeading">
          <h3>Today's Task</h3>
          <div className="taskStatus">
            {/* <span>{taskCompleted}</span> /<span>{taskArray.length}</span> */}
            <CircularTaskProgress
              completed={taskCompleted}
              total={taskArray.length}
            />
          </div>
        </div>
        <div className="taskContainer">
          {taskArray && taskArray.length === 0 ? (
            <div>
              <img
                src="/image/noTaskImg.png"
                alt=""
                style={{
                  width: "80%",
                }}
              />
              <h3
                style={{
                  color: "rgba(31, 31, 31, 0.7)",
                  // textAlign: "center",
                  marginLeft: "2.4rem",
                }}
              >
                No Task To Do.....
              </h3>
            </div>
          ) : (
            taskArray.map((task, idx) => {
              return (
                <div className="taskBox" key={idx}>
                  <input
                    type="checkbox"
                    value={idx}
                    checked={task.isCompleted}
                    onChange={handleTick}
                  />
                  <div className="taskData">
                    <h4>
                      {`${idx + 1}. `} {task.title}
                    </h4>
                    <p>{task.description}</p>
                    <div className="taskInfo">
                      <div className="taskTime">
                        <i className="fa-regular fa-clock"></i>
                        10:00AM
                      </div>
                      <div className="taskType">
                        <span>#</span>
                        {task.category}
                      </div>
                      <div className={task.priority}>{task.priority}</div>
                    </div>
                  </div>
                  <div className="taskBoxBtn">
                    <div
                      className="taskEditBtn"
                      onClick={() => {
                        setFormData({
                          title: taskArray[idx].title,
                          priority: taskArray[idx].priority,
                          category: taskArray[idx].category,
                          description: taskArray[idx].description,
                          isCompleted: false,
                        });
                        setAddIconBtnClick(taskArray.splice(idx, 1));
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div
                      className="taskDeleteBtn"
                      onClick={() => {
                        taskArray.splice(idx, 1);
                        setTaskArray([...taskArray]);
                        localStorage.setItem(
                          "taskArray",
                          JSON.stringify([...taskArray]),
                        );
                      }}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          className="addIconBtn"
          onClick={() => {
            setAddIconBtnClick(!addIconBtnClick);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>

      <TaskForm
        addIconBtnClick={addIconBtnClick}
        setAddIconBtnClick={setAddIconBtnClick}
        setTaskArray={setTaskArray}
        taskArray={taskArray}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};

export default TaskBody;
