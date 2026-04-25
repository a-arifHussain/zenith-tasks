import React, { useState } from "react";
import "./calendar.css"; // The styles are moved to an external CSS file

const Calendar = () => {
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Helper arrays
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Current view calculations
  const viewMonth = currentViewDate.getMonth();
  const viewYear = currentViewDate.getFullYear();
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Reference for "today"
  const today = new Date();
  const isTodayDate = (year, month, day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  // Navigation and selection handlers
  const changeMonth = (offset) => {
    setCurrentViewDate(new Date(viewYear, viewMonth + offset, 1));
  };

  const selectDay = (day) => {
    setSelectedDate(new Date(viewYear, viewMonth, day));
  };

  return (
    <div className="pro-calendar-container whiteBox" id="calendar">
      {/* Header with smoother animation target */}
      <header className="pro-header">
        <button className="nav-btn" onClick={() => changeMonth(-1)}>
          &lt; {/* Less-than symbol */}
        </button>
        <h2 key={`${viewMonth}-${viewYear}`} className="pro-month-year">
          {months[viewMonth]} <span className="pro-year">{viewYear}</span>
        </h2>
        <button className="nav-btn" onClick={() => changeMonth(1)}>
          &gt; {/* Greater-than symbol */}
        </button>
      </header>

      {/* Grid: Labels & Days */}
      <div className="pro-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}

        {/* Padding slots */}
        {[...Array(firstDayOfMonth)].map((_, i) => (
          <div key={`empty-${i}`} className="empty-slot" />
        ))}

        {/* Day slots */}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const isToday = isTodayDate(viewYear, viewMonth, day);

          // Check if this day is the selected one
          const isSelected =
            selectedDate &&
            day === selectedDate.getDate() &&
            viewMonth === selectedDate.getMonth() &&
            viewYear === selectedDate.getFullYear();

          // Build dynamic classes
          let dayClasses = ["day-slot"];
          if (isToday) dayClasses.push("is-today");
          if (isSelected) dayClasses.push("is-selected");

          return (
            <div
              key={day}
              className={dayClasses.join(" ")}
              onClick={() => selectDay(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
