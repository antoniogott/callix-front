import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  return (
    <div className="gallery_root"
      style={{ height: props.height }}>
      <h3 className="gallery_title">Gallery</h3>
      <div className="carousel">
        {props.images.map((i, index) =>
          <div className="carousel_item" key={i}>
            <a href={i} target="_blank" rel="noreferrer">
              <img className="carousel_img" src={i} alt={`launch pic ${index + 1}`} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
