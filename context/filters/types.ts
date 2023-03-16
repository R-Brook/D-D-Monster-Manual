export type SelectedFiltersState = {
  monsterSize: string;
  monsterType: string;
  monsterAC: string;
};

export type Action =
  | { type: "setMonsterSize"; payload: string }
  | { type: "clearMonsterSize" }
  | { type: "setMonsterType"; payload: string }
  | { type: "clearMonsterType" }
  | { type: "setMonsterAC"; payload: string }
  | { type: "clearMonsterAC" }
  | { type: "clearAllFilters" };

export type FilterDispatch = (action: Action) => void;
