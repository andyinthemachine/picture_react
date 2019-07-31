import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src={props.image} onClick={() => props.handleElementClick(props.id)} />
      </div>
    </div>
  );
}

export default PictureCard;
