import React from "react";
import "./TaskForm.css";
const TaskForm = ({
  addIconBtnClick,
  setAddIconBtnClick,
  setTaskArray,
  taskArray,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (
      formData.title === "" ||
      formData.priority === "" ||
      formData.category === "" ||
      formData.description === ""
    ) {
      alert("every filled is required");
    } else {
      setTaskArray([...taskArray, formData]);
      localStorage.setItem(
        "taskArray",
        JSON.stringify([...taskArray, formData]),
      );
      setFormData({
        title: "",
        priority: "",
        category: "",
        description: "",
        isCompleted: false,
      });
      setAddIconBtnClick(false);
    }
  };

  return (
    <div
      className="taskFormBody"
      style={{ display: addIconBtnClick ? "flex" : "none" }}
    >
      <div className="taskForm">
        <div className="formCloser">
          <i
            className="fa-solid fa-xmark "
            onClick={() => {
              setAddIconBtnClick(!addIconBtnClick);
            }}
          ></i>
        </div>
        <div className="formHeader">
          <h3>New Task</h3>
        </div>

        <form action="" method="post">
          <div className="taskName">
            <p>Task Name:</p>
            <input
              type="text"
              name="title"
              placeholder="Title of the task"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="priority">
            <p>Priority:</p>
            <div>
              <div className="lowPrio">
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={formData.priority === "Low"}
                  onChange={handleChange}
                />
                <p>Low</p>
              </div>
              <div className="mediumPrio">
                <input
                  type="radio"
                  name="priority"
                  value="Medium"
                  checked={formData.priority === "Medium"}
                  onChange={handleChange}
                />
                <p>Medium</p>
              </div>
              <div className="highPrio">
                <input
                  type="radio"
                  name="priority"
                  value="High"
                  checked={formData.priority === "High"}
                  onChange={handleChange}
                />
                <p>High</p>
              </div>
            </div>
          </div>
          <div className="type">
            <p>Category</p>
            <input
              type="text"
              name="category"
              placeholder="Type of task"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="description">
            <p>Description:</p>
            <textarea
              name="description"
              placeholder="Write the task desciption"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="addBtnDiv">
            <button
              // type="submit"
              // value="Done"
              className="taskAddBtn"
              onClick={handleSubmit}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
