import { atom, selector } from "recoil";

export const filterData = atom({
  key: "filterData",
  default: "all",
});

export const cardsData = atom({
  key: "cardsData",
  default: null,
});

export const cardsFilteredSelector = selector({
  key: "cardsFilteredSelector",
  get: ({ get }) => {
    const filter = get(filterData);
    const cards = get(cardsData);

    if (cards) {
      if (filter === "all") return cards.near_earth_objects["2021-12-20"];

      return cards.near_earth_objects["2021-12-20"].filter(card => {
        if (filter === "hazardous" && card.is_potentially_hazardous_asteroid) {
          return card;
        } else if (
          filter === "biggest" &&
          card.estimated_diameter.meters.estimated_diameter_max > 400
        ) {
          return card;
        }
      });
    }
  },
});
