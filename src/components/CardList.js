import React from "react";
import { useRecoilValue } from "recoil";
import { cardsFilteredSelector } from "../store/recoilStore";
import Card from "./Card";

const CardList = () => {
  const cards = useRecoilValue(cardsFilteredSelector);
  return (
    <div className="cards-list">
      {cards &&
        cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
    </div>
  );
};

export default CardList;
