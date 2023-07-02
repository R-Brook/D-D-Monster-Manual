import React, { FC, useEffect } from "react";
import styles from "./Pagination.module.css";
import classNames from "classnames";

import {
  usePagination,
  usePaginationDispatch,
} from "context/pagination/paginationContext";

export interface PaginationProps {
  onChange?: (value: string) => void;
  entries_per_page: number;
}

export const Pagination: FC<PaginationProps> = ({
  //onChange,
  entries_per_page,
}) => {
  const { numberOfPages, resultsTotal, entriesPerPage, currentPage } =
    usePagination();
  const dispatchPagination = usePaginationDispatch();

  const iteratePages = Array.from(Array(numberOfPages).keys());

  useEffect(() => {
    dispatchPagination({
      type: "setCurrentPage",
      payload: 1,
    });
  }, [resultsTotal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <div className={styles.container}>
      <button
        className={classNames(
          styles.button,
          currentPage === 1 ? styles.disabled : styles.enabled
        )}
        aria-label="Pagination decrease"
        disabled={currentPage === 1}
        onClick={() => {
          dispatchPagination({
            type: "setCurrentPage",
            payload: currentPage > 1 ? currentPage - 1 : currentPage,
          });
          scrollToTop();
        }}
      >
        <svg
          className={classNames(styles.arrow, styles.backArrow)}
          viewBox="0 0 185.343 185.343"
        >
          <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path>
        </svg>
      </button>

      {iteratePages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={classNames(
            styles.button,
            pageNumber + 1 === currentPage ? styles.selected : styles.unselected
          )}
          onClick={() => {
            dispatchPagination({
              type: "setCurrentPage",
              payload: pageNumber + 1,
            });
            scrollToTop();
          }}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        className={classNames(
          styles.button,
          currentPage === numberOfPages ? styles.disabled : styles.enabled
        )}
        aria-label="Pagination increase"
        disabled={currentPage === numberOfPages}
        onClick={() => {
          dispatchPagination({
            type: "setCurrentPage",
            payload:
              currentPage < numberOfPages ? currentPage + 1 : currentPage,
          });
          scrollToTop();
        }}
      >
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.343 185.343"
        >
          <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path>
        </svg>
      </button>
    </div>
  );
};
