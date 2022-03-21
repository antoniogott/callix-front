import React from "react";
import LaunchListItem from "../LaunchListItem/LaunchListItem";
import "./LaunchList.css";

export default function LaunchList(props) {
  if (!props.launches) return null;

  return (
    <ul className="launch-list_root">
      {props.launches.map(launch =>
        <LaunchListItem launch={launch} key={launch.id} showSuccess={props.showSuccess} onClick={props.onSelected} />
      )}
    </ul>
  );
}
