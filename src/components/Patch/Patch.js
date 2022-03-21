import React from "react";
import "./Patch.css"

export default function Patch(props) {
  return (
    <div className="patch_root" style={{ height: props.height, width: props.width }}>
      <img src={props.src || "/logo.jpg"} alt="patch" style={{ height: props.height, width: props.width }} />
    </div>
  );
}
