import React from 'react';

export default function LaunchBig(props) {
  const launch = props.launch;
  if (!launch) return null;

  const gallery = launch.imgs.gallery?.length > 0 &&
    <ul>
      {launch.imgs.gallery.map(
        i => <li key={i}><img src={i} alt="launch pic" style={{height:"200px"}} /></li>
      )}
    </ul>;

  return (
    <div>
      <h1>{launch.name}</h1>
      <img src={launch.imgs.patch} alt="patch" />
      {gallery}
    </div>
  );
}
