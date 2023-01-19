import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {

  return (
    <div className="cards-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
        />
      ))}
    </div>
  );
};

export default CardList;
