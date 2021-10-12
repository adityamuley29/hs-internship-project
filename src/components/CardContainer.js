import React, { Component } from "react";
import Card from "./Card";
import "./CardContainer.css";

// function CardContainer() {

//     componentDidMount()
//     {
//         const url = "https://jsonplaceholder.typicode.com/posts";

//     }
//   return (
//     <div id="container">
//       <Card userId="2" title="myTitle" discription="myDesc" />
//       <Card title="myTitle" discription="myDesc" />
//       <Card title="myTitle" discription="myDesc" />
//       <Card title="myTitle" discription="myDesc" />
//       <Card title="myTitle"/>
//       <Card title="myTitle"/>

//     </div>
//   );
// }

// export default CardContainer;

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const responce = await fetch(url);
    const data1 = await responce.json();
    // console.log(data1);
    this.setState({ data: data1 });
  }
  render() {
    return (
      <div id="container">
        {this.state.data.map((element) => {
          return (
            <Card
              userId={element.userId}
              title={element.title}
              body={element.body}
              key={element.id}
            />
          );
        })}
      </div>
    );
  }
}

export default CardContainer;
