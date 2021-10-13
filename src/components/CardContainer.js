import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

function CardContainer() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      response.json().then((response) => setdata(response));
    }

    fetchData();
  }, []);

  return (
    <div id="container">
      {data.map((element) => {
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

export default CardContainer;
