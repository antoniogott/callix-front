import React from "react";
import Gallery from "../Gallery/Gallery";
import "./LaunchBig.css";

export default function LaunchBig(props) {
  const launch = props.launch;
  if (!launch) return null;

  const imgs = (launch.imgs ?? []).concat(launch.rocket.imgs);

  return (
    <div className="launch-big_root" style={{
      backgroundImage: `url(${imgs[0]})`,
    }}>
      <div className="launch-big_title">
        <img className="launch-big_patch" src={launch.patch} alt="patch" />
        <h1>{launch.name}</h1>
      </div>

      <Gallery images={imgs} height="300px" />

      <div className="launch-big_data">
        <p>
          <b>Success: </b>
          <span className="launch-big_success" data-success={launch.success}>
            <b>{launch.success ? "Yes" : "No"}</b>
          </span>
        </p>

        <p><b>Launch date:</b> {new Date(launch.date_utc).toLocaleString()} (UTC)</p>

        <p>
          <b>Rocket: </b>
          <a className="launch-big_link" href={launch.rocket.wikipedia} target="_blank" rel="noreferrer">
            {launch.rocket.name} ↗
          </a>
        </p>

        <p><b>Details:</b> {launch.details}</p>

        <iframe title="youtube" className="launch-big_youtube" width="100%"
          frameBorder="0" allowFullScreen
          src={`https://www.youtube.com/embed/${launch.youtube_id}?fs=1`}>
        </iframe>
      </div>

    </div>
  );
}
