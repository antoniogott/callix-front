import React from "react";
import { useState, useEffect } from "react";
import Launch from "../Launch/Launch";
import "./HeaderNav.css";

export default function HeaderNav(props) {
  function handleSelect(option) {
    props.onSelected && props.onSelected(option);
  }

  return (
    <div className="header-nav_root">

      <div onClick={() => handleSelect("past")}
        className={`header-nav_card ${props.selected === "past" && "header-nav_selected"}`}>
        Past launches
      </div>

      <div onClick={() => handleSelect("latest")}
        className={`header-nav_card ${props.selected === "latest" && "header-nav_selected"}`}>
        Latest launch
      </div>

      <div onClick={() => handleSelect("next")}
        className={`header-nav_card ${props.selected === "next" && "header-nav_selected"}`}>
        Next launch
      </div>

      <div onClick={() => handleSelect("upcoming")}
        className={`header-nav_card ${props.selected === "upcoming" && "header-nav_selected"}`}>
        Upcoming launches
      </div>

    </div>
  );
}
