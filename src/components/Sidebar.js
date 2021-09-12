import React, { useContext, useState } from "react";
import classNames from "classnames";
import Accountbadge from "./Accountbadge";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import List from "./List";
import "../styles/Sidebar.css";
import { LocalStateContext } from "../contexts/sidebarState";
import SubList from "./SubList";

const ListSeparator = () => <div className="sidebar__menu-separator"></div>;
function Sidebar() {
  const { dataSet, sideBarActive, setSideBarActive, togglList } =
    useContext(LocalStateContext);
  return (
    <div
      className={classNames("sidebar", {
        "is-active": sideBarActive,
      })}>
      <div
        className={classNames("sidebar__bg", {
          "is-active": sideBarActive,
        })}
        onClick={() => setSideBarActive(false)}></div>

      <span
        className={classNames("sidebar__close", {
          "is-active": sideBarActive,
        })}
        onClick={() => setSideBarActive(false)}>
        <CloseRoundedIcon fontSize="large" />
      </span>
      <div
        className={classNames("sidebar__menu", {
          "is-active": sideBarActive,
        })}>
        <div className="sidebar__menu-header">
          <Accountbadge />
        </div>
        <div
          className={classNames("sidebar__menu-content", {
            "is-active": togglList.active,
          })}>
          {dataSet.map((section) => (
            <div key={section.id}>
              <h3 className="sidebar__section-header" key={section.id}>
                {section.title}
              </h3>
              {section.categories.map((category) => (
                <List
                  key={category.id}
                  category={category}
                  sectionId={section.id}
                />
              ))}
              <ListSeparator />
            </div>
          ))}
        </div>
        <SubList />
      </div>
    </div>
  );
}

export default Sidebar;
