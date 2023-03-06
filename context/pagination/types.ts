export type PaginationState = {
  resultsTotal: number;
  filteredList: any;
  currentPage: number;
  entriesPerPage: number;
  numberOfPages: number;
  //shownItems: any;
};

export type Action =
  | { type: "setResultsTotal"; payload: number }
  | { type: "setNumberOfPages"; payload: number }
  | { type: "setEntriesPerPage"; payload: number }
  | { type: "setCurrentPage"; payload: number };

export type PaginationDispatch = (action: Action) => void;
