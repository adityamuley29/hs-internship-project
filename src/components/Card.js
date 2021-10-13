import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card" id="card">
      <div className="card-header bg-dark text-white">user-id : {props.userId}</div>
      <div className="card-body">
        <h5 className="card-title">
          <strong>{props.title}</strong>
        </h5>
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  );
}

export default Card;
