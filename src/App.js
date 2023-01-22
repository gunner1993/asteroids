import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { cardsData } from "./store/recoilStore";

const App = () => {
  const [cards, setCards] = useRecoilState(cardsData);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-12-16&api_key=oIrmVgsSPsjCau12VhdHTVEEY6vK5uZPujX9KFSD"
    )
      .then(response => response.json())
      .then(json => setCards(json));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biggest" element={<Home />} />
        <Route path="/hazardous" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
