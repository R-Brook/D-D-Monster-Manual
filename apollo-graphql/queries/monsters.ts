import { gql } from "@apollo/client";

export const MONSTERS_QUERY = gql`
  query Monsters {
    monsters(limit: 400) {
      index
      name
      image
      xp
      size
      type
      hit_points
      armor_class {
        value
      }
    }
  }
`;
