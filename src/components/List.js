import React, { useContext } from "react";
import { LocalStateContext } from "../contexts/sidebarState";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function List({ category, sectionId }) {
  const { setTogglList } = useContext(LocalStateContext);
  const { title, id } = category;
  const handleClick = () => {
    setTogglList((state) => ({
      ...state,
      active: true,
      sectionId,
      itemId: id,
    }));
  };

  return (
    <div className="list">
      <ul className="list__tree">
        <li
          className="list__branche"
          key={id} // Computers ID : data1-a
          onClick={handleClick}>
          <p>{title}</p>
          <ArrowForwardIosIcon />
        </li>
      </ul>
    </div>
  );
}

export default List;
