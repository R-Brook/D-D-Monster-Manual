import React from "react";
import { Action, FilterDispatch, SelectedFiltersState } from "./types";

const initialFilterState: SelectedFiltersState = {
  monsterSize: "ALL",
  monsterType: "ALL",
  monsterAC: "ALL",
};

const reducer = (
  state: SelectedFiltersState,
  action: Action
): SelectedFiltersState => {
  switch (action.type) {
    case "setMonsterSize":
      return {
        ...state,
        monsterSize: action.payload,
      };
    case "clearMonsterSize":
      return {
        ...state,
        monsterSize: initialFilterState.monsterSize,
      };
    case "setMonsterType":
      return {
        ...state,
        monsterType: action.payload,
      };
    case "clearMonsterType":
      return {
        ...state,
        monsterType: initialFilterState.monsterType,
      };
    case "setMonsterAC":
      return {
        ...state,
        monsterAC: action.payload,
      };
    case "clearMonsterAC":
      return {
        ...state,
        monsterAC: initialFilterState.monsterAC,
      };
    case "clearAllFilters":
      return {
        ...initialFilterState,
      };

    default:
      throw new Error("Error - filter action not recognised");
  }
};

const FilterContext = React.createContext<SelectedFiltersState | undefined>(
  initialFilterState
);

const FilterDispatchContext = React.createContext<FilterDispatch | undefined>(
  undefined
);

export const SelectedFiltersProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialFilterState);

  return (
    <FilterContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
};

export const useSelectedFilters = (): SelectedFiltersState => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useSelectedFilters must be used within a Provider");
  }
  return context;
};

export const useSelectedFiltersDispatch = (): FilterDispatch => {
  const context = React.useContext(FilterDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedFiltersDispatch must be used within a Provider"
    );
  }
  return context;
};

/*
  const [filteredList, setFilteredList] = React.useState(monstersData)

  const [resultsTotal, setResultsTotal] = React.useState(336);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [entriesPerPage, setEntriesPerPage] = React.useState(24);
  const [numberOfPages, setNumberOfPages] = React.useState(1);
  const [shownItems, setShownItems] = React.useState(filteredList);
  */
