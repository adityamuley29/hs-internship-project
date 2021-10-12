import "./Card.css";
import React, { Component } from "react";

export class Card extends Component {
  
  render() {
      let {userId,title,body} = this.props;
    return (
        <div className="card" id="card">
        <div className="card-header bg-dark text-white">
          user-id : {userId}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <strong>{title}</strong>
          </h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    );
  }
}

export default Card;
