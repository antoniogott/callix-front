import React from 'react';
import Patch from '../Patch/Patch';
import "./LaunchListItem.css";

export default function LaunchListItem(props) {
  function handleClick() {
    props.onClick && props.onClick(props.launch.id);
  }

  return (
    <li className="launch-list_item" onClick={handleClick}>
      <Patch src={props.launch.patch} width="12rem" height="9rem" />
      <div className="launch-list_item_details">
        <h4>{props.launch.name}</h4>
        <p><b>Launch date:</b> {new Date(props.launch.date_utc).toLocaleString()} (UTC)</p>
        {props.showSuccess && <p>
          <b>Success: </b>
          <span className="launch-list_success" data-success={props.launch.success}>
            {props.launch.success ? "Yes" : "No"}
          </span>
        </p>}
      </div>
    </li>
  );
}
