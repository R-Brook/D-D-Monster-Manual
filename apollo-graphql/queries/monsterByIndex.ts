import { gql } from "@apollo/client";

export const MONSTER_INDEX_QUERY = gql`
  query Monsters {
    monsters(limit: 400) {
      index
    }
  }
`;
