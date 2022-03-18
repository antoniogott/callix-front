import React from "react";
import LaunchBig from "../LaunchBig/LaunchBig";
import "./HeaderNav.css";

export default function HeaderNav(props) {
  function handleSelect(option) {
    props.onSelected && props.onSelected(option);
  }

  return (
    <div className="header-nav_root">

      <div className="header-nav_card" onClick={() => handleSelect("past")}>
        Past launches
      </div>

      <div className="header-nav_card" onClick={() => handleSelect("latest")}>
        Latest launch
      </div>

      <div className="header-nav_card" onClick={() => handleSelect("next")}>
        Next launch
      </div>

      <div className="header-nav_card" onClick={() => handleSelect("upcoming")}>
        Upcoming launches
      </div>

    </div>
  );
}
