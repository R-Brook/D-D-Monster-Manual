import React, { FC, useEffect } from "react";
import styles from "./pagination.module.css";
import classNames from "classnames";

export interface PaginationProps {
  //value: (value: string) => void;
  onChange?: (value: string) => void;
  number_of_pages: number;
  results_total: number;
  entries_per_page: number;
}

export const Pagination: FC<PaginationProps> = ({
  onChange,
  number_of_pages,
  results_total,
  entries_per_page,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const iteratePages = Array.from(Array(number_of_pages).keys());
  /*
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  */

  useEffect(() => {
    setCurrentPage(1);
  }, [results_total]);

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.button, styles.chevron)}
        onClick={() =>
          setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
        }
      >
        <svg
          height="12px"
          width="12px"
          viewBox="0 0 185.343 185.343"
          transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>

      {iteratePages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={classNames(
            styles.button,
            pageNumber + 1 === currentPage ? styles.selected : styles.unselected
          )}
          onClick={() => setCurrentPage(pageNumber + 1)}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        className={classNames(styles.button, styles.chevron)}
        onClick={() =>
          setCurrentPage(
            currentPage < number_of_pages ? currentPage + 1 : currentPage
          )
        }
      >
        <svg
          height="12px"
          width="12px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.343 185.343"
          transform="rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};
