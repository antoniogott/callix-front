import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import LaunchBig from "../LaunchBig/LaunchBig";
import "./Home.css";

export default function Home(props) {
  let content;

  switch (props.selected) {
    case "past":
      // return // TODO list
      break;
    case "upcoming":
      // return // TODO list
      break;
    case "next":
      content = <LaunchBig launch={props.launch} />;
      break;
    case "latest":
    default:
      content = <LaunchBig launch={props.launch} />;
      break;
  }

  return (
    <div className="homeRoot">
      <HeaderNav selected={props.selected} onSelected={props.onSelected} />
      {["next", "latest"].includes(props.selected) && <LaunchBig launch={props.launch} />}
      {/* {["past", "upcoming"].includes(props.selected) && <LaunchBig launch={props.launch} />} */}
    </div>
  );
}
