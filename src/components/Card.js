import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card-box" id="card-box">
      <div className="card-content">
        <p className="card-userId">USER-ID : {props.userId}</p>

        <h5 className="card-title">
          <strong>Title : {props.title}</strong>
        </h5>
        <p className="card-desc">Body : {props.body}</p>
      </div>
    </div>
  );
}

export default Card;
