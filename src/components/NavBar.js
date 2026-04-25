import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [barClick, setBarClick] = useState(false);
  const [userName, setUserName] = useState();
  const [userUrl, setUserUrl] = useState();

  const handleUserName = () => {
    const user = prompt("Enter user Name : ");
    setUserName(user);
    localStorage.setItem("userName", JSON.stringify(user));
  };
  const handleUserUrl = () => {
    const url = prompt("Enter profile photo url : ");
    setUserUrl(url);
    localStorage.setItem("userUrl", JSON.stringify(url));
  };
  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("userName")));
    setUserUrl(JSON.parse(localStorage.getItem("userUrl")));
  }, []);

  return (
    <div className="navBar">
      <div
        className="hamBarger"
        onClick={() => setBarClick(!barClick)}
        style={{ visibility: barClick ? "hidden" : "visible" }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="titleBox">
        <h3> Zenith Tasks</h3>
      </div>

      <div className="toolBox" style={{ left: barClick ? 0 : -100 }}>
        <div className="toolCloser" onClick={() => setBarClick(!barClick)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="homeNav">
          <i className="fa-solid fa-house"></i>

          <a href="#home">
            <p>Home</p>
          </a>
        </div>
        <div className="projectsNav">
          <i className="fa-solid fa-folder"></i>
          <a href="#project">
            <p>Project</p>
          </a>
        </div>
        <div className="calenderNav">
          <i className="fa-solid fa-calendar"></i>

          <a href="#calendar">
            <p>Calender</p>
          </a>
        </div>
        <div className="settingNav">
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </div>
      </div>

      <div className="aboutBox">
        <div>
          <p>profile</p>
          <h5 onClick={handleUserName}>{userName ? userName : "Arif"}</h5>
        </div>
        <div className="profileImg" onClick={handleUserUrl}>
          {userUrl ? (
            <img src={userUrl} alt="profile" />
          ) : (
            <i className="fa-solid fa-circle-user"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
