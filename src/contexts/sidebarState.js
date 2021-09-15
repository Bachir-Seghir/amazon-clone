import React, { useState, createContext, useEffect } from "react";
import { data } from "../lib/data";

export const LocalStateContext = createContext({});

const SideBarStateProvider = ({ children }) => {
  const [dataSet, setDataSet] = useState(data);
  const [sideBarActive, setSideBarActive] = useState(false);
  const [togglList, setTogglList] = useState({
    active: false,
    sectionId: undefined,
    itemId: undefined,
  });
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    if (!sideBarActive) {
      setTogglList({ active: false, sectionId: undefined, itemId: undefined });
    }
  }, [sideBarActive]);
  useEffect(() => {
    if (togglList.sectionId && togglList.itemId) {
      const section = dataSet.filter(
        (section) => section.id === togglList.sectionId
      );
      section.map((item) =>
        item.categories.map(
          (item) => item.id === togglList.itemId && setSelectedCategory(item)
        )
      );
    }
  }, [dataSet, togglList.sectionId, togglList.itemId]);
  return (
    <LocalStateContext.Provider
      value={{
        dataSet,
        sideBarActive,
        setSideBarActive,
        togglList,
        setTogglList,
        selectedCategory,
        setSelectedCategory,
      }}>
      {children}
    </LocalStateContext.Provider>
  );
};

export default SideBarStateProvider;
