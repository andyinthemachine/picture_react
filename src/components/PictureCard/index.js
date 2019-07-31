import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shufflePictures(props.id)} />
      </div>
    </div>
  );
}

export default PictureCard;
