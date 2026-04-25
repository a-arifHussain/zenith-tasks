import React from "react";
import "./OtherDataBody.css";
import Calendar from "./Calendar";
import ProgressTable from "./ProgressTable";

const OtherDataBody = () => {
  // useEffect({}, []);

  return (
    <div className="OtherDataBody">
      <Calendar />
      <ProgressTable />
    </div>
  );
};

export default OtherDataBody;
