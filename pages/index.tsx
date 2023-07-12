import React, { ChangeEvent, useEffect } from "react";
import Head from "next/head";
import client from "../apollo-graphql/apollo-client";
import { Card } from "components/Card";
import { MONSTERS_QUERY } from "apollo-graphql/queries/monsters";
import { MonstersProps } from "types/monsters";
import { hasImageInPublicFolder } from "utilities/images";
import { Select } from "components/Select";
import { MonsterAC, MonsterSize, MonsterType } from "utilities/monster-filters";
import { SelectedFilter } from "components/SelectedFilter";
import { useRouter } from "next/router";
import { Pagination } from "components/Pagination";

import {
  usePagination,
  usePaginationDispatch,
} from "context/pagination/paginationContext";

export default function Home({ monstersData }: MonstersProps) {
  const router = useRouter();
  const { push, query } = useRouter();

  const [filteredList, setFilteredList] = React.useState(monstersData);

  const {
    numberOfPages,
    resultsTotal,
    entriesPerPage,
    currentPage,
    shownItems,
  } = usePagination();
  const dispatchPagination = usePaginationDispatch();
  const { type = "ALL", size = "ALL", ac = "ALL" } = router.query;

  /*
  // @TODO: Refactor ffunction
*/

  const filterAttribute = (filteredData: any, foo: string | string[]) => {
    if (foo === "ALL" || undefined) {
      return filteredData;
    } else if (foo === size) {
      const filtered = filteredData.filter(
        (monster: { size: string }) => monster.size === foo
      );
      return filtered;
    } else if (foo === type) {
      const filtered = filteredData.filter(
        (monster: { type: string }) => monster.type === foo
      );
      return filtered;
    } else if (foo === ac) {
      const filtered = filteredData.filter(
        (monster: { armor_class: { value: string }[] }) =>
          monster.armor_class[0].value.toString() === foo
      );
      return filtered;
    }
  };

  const setQueryParam = (
    param: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    push({ query: { ...query, [param]: value } }, undefined, {
      shallow: true,
    });
  };

  const clearParam = (value: string) => {
    const { pathname, query } = router;
    delete router.query[value];
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  useEffect(() => {
    let filteredData = filterAttribute(monstersData, size);
    filteredData = filterAttribute(filteredData, type);
    filteredData = filterAttribute(filteredData, ac);

    setFilteredList(filteredData);

    dispatchPagination({
      type: "setResultsTotal",
      payload: filteredData.length,
    });
    dispatchPagination({
      type: "setNumberOfPages",
      payload: Math.ceil(resultsTotal / entriesPerPage),
    });

    // go through filteredList x numberOfPages, and cut into sections of a certain size
    let startPoint = 0;
    pageArray = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const section = filteredList.slice(
        startPoint,
        (startPoint += entriesPerPage)
      );
      pageArray.push(section);
    }

    dispatchPagination({
      type: "setShownItems",
      payload: pageArray[currentPage - 1],
    });
  }, [size, type, ac, resultsTotal, numberOfPages, currentPage]);

  let pageArray: any[][] = [filteredList];

  return (
    <>
      <Head>
        <title>D&D 5e Monster Manual</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="cards-container">
          <div className="filter-container">
            <Select
              required={false}
              label={"Monster size"}
              name={"monster-size"}
              id={"size"}
              value={size}
              options={MonsterSize}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setQueryParam("size", event);
              }}
            />

            <Select
              required={false}
              label={"Monster type"}
              name={"monster-type"}
              id={"type"}
              value={type}
              options={MonsterType}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setQueryParam("type", event);
              }}
            />

            <Select
              required={false}
              label={"Monster AC value"}
              name={"monster-ac"}
              id={"ac"}
              value={ac}
              options={MonsterAC}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setQueryParam("ac", event);
              }}
            />
          </div>
          <div className="selected-filter-container">
            <div className="totals">
              {resultsTotal} results. {numberOfPages} pages
            </div>
            {size !== "ALL" && (
              <SelectedFilter
                label={"Monster size"}
                selected_value={size}
                onClick={() => clearParam("size")}
              />
            )}
            {type !== "ALL" && (
              <SelectedFilter
                label={"Monster type"}
                selected_value={type}
                onClick={() => clearParam("type")}
              />
            )}
            {ac !== "ALL" && (
              <SelectedFilter
                label={"AC value"}
                selected_value={ac}
                onClick={() => clearParam("ac")}
              />
            )}
          </div>

          {shownItems ? (
            shownItems.map((monster) => (
              <div className="card-container" key={monster.index}>
                <Card
                  name={monster.name}
                  index={monster.index}
                  image={
                    monster.image && monster.image.length > 0
                      ? `https://www.dnd5eapi.co${monster.image}`
                      : hasImageInPublicFolder.includes(monster.index)
                      ? `/images/monsters/${monster.index}.jpg`
                      : null
                  }
                  type={monster.type}
                  size={monster.size}
                  hit_points={monster.hit_points}
                  armor_class_value={monster.armor_class[0].value}
                />
              </div>
            ))
          ) : (
            <span className="no-results">
              No results match filter selection
            </span>
          )}
        </div>

        {shownItems && <Pagination entries_per_page={entriesPerPage} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  let monstersData = {} as MonstersProps;

  await client
    .query({
      query: MONSTERS_QUERY,
    })
    .then((res) => {
      monstersData = res.data.monsters;
    });

  return {
    props: {
      monstersData,
    },
  };
}
