import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import { atom, useRecoilState, useRecoilValue } from 'recoil';


export const filterData = atom({
  key: "filterData", 
  default: "all"
})

const App = () => {
  
  const [cards, setCards] = useState(null);
  const filter = useRecoilValue (filterData)

    useEffect(() => {
      fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-12-16&api_key=oIrmVgsSPsjCau12VhdHTVEEY6vK5uZPujX9KFSD')
  .then(response => response.json())
  .then(json => setCards(json))
    
    }, [])
    
    const filteredCards = cards && cards.near_earth_objects["2021-12-20"].filter(card => {
      if (filter === "hazardous" && card.is_potentially_hazardous_asteroid) {
        return card;
      } else if (filter === "biggest" && card.estimated_diameter.meters.estimated_diameter_max > 400) {
        return card;
      } else if (filter === "all") {
        return card;
      }
    })
 
    return (
    <div>
      <NavBar />
      {cards && <CardList cards={filteredCards}/>}
    </div>
  )
}

export default App

