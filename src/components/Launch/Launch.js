import React from "react";
import Gallery from "../Gallery/Gallery";
import Patch from "../Patch/Patch";
import "./Launch.css";

export default function Launch(props) {
  const launch = props.launch;
  if (!launch) return null;

  const imgs = (launch.imgs ?? []).concat(launch.rocket.imgs);

  return (
    <div className="launch_root" style={{
      backgroundImage: `url(${imgs[0]})`,
    }}>
      <div className="launch_title">
        <Patch className="launch_patch" src={launch.patch} height="7em" width="7em" />
        <h1>{launch.name}</h1>
      </div>

      <Gallery images={imgs} height="300px" />

      <div className="launch_data">
        <p>
          <b>Success: </b>
          <span className="launch_success" data-success={launch.success}>
            <b>{launch.success ? "Yes" : "No"}</b>
          </span>
        </p>

        <p><b>Launch date:</b> {new Date(launch.date_utc).toLocaleString()} (UTC)</p>

        <p>
          <b>Rocket: </b>
          <a className="launch_link" href={launch.rocket.wikipedia} target="_blank" rel="noreferrer">
            {launch.rocket.name} ↗
          </a>
        </p>

        {launch.details &&
          <p><b>Details:</b> {launch.details}</p>}

        <iframe title="youtube" className="launch_youtube" width="100%"
          frameBorder="0" allowFullScreen
          src={`https://www.youtube.com/embed/${launch.youtube_id}?fs=1`}>
        </iframe>
      </div>

    </div>
  );
}
