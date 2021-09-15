import React, { useContext } from "react";
import classNames from "classnames";

import { LocalStateContext } from "../contexts/sidebarState";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const SubList = () => {
  const { setTogglList, togglList, selectedCategory, setSelectedCategory } =
    useContext(LocalStateContext);
  return (
    <div
      className={classNames("subList", {
        "is-active": togglList.active,
      })}>
      <div
        className="subList__return"
        onClick={() => {
          setTogglList((state) => ({
            ...state,
            active: false,
            sectionId: undefined,
            itemId: undefined,
          }));
        }}>
        <ArrowBackRoundedIcon color="action" />
        <span>Main Menu</span>
      </div>
      <ul className="subList__menu">
        <h3 className="sidebar__section-header">{selectedCategory.title}</h3>
        {selectedCategory?.subCategories?.items?.map((category) => (
          <li className="list__branche" key={category.id}>
            <p>
              <a href={category.pathname}>{category.title}</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubList;
