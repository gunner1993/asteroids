import React from 'react'
import { useRecoilState } from 'recoil';
import { filterData } from '../App';

const Menu = () => {

  const [filter, setFilter]=useRecoilState (filterData);

  return (
    <div className='menu'>

      <select onChange={e => setFilter(e.target.value)}>
        <option value="all">All Objects</option>
        <option value="biggest">Biggest Objects</option>
        <option value="hazardous">Hazardous Objects</option>
      </select>
    
    </div>
  )
}

export default Menu
