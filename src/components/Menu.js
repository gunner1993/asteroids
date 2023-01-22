import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { filterData } from "../store/recoilStore";

const Menu = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useRecoilState(filterData);

  const redirect = value => {
    if (value === "biggest") {
      navigate("/biggest");
    } else if (value === "hazardous") {
      navigate("/hazardous");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="menu">
      <select
        defaultValue={
          window.location.pathname === "/"
            ? "all"
            : window.location.pathname === "/biggest"
            ? "biggest"
            : "hazardous"
        }
        onChange={e => {
          setFilter(e.target.value);
          redirect(e.target.value);
        }}
      >
        <option value="all">All Objects</option>
        <option value="biggest">Biggest Objects</option>
        <option value="hazardous">Hazardous Objects</option>
      </select>
    </div>
  );
};

export default Menu;
