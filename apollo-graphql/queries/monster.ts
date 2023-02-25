import { gql } from "@apollo/client";

export const MONSTER_QUERY = gql`
  query Monster($path: String!) {
    monster(index: $path) {
      name
      index
      image
      xp
      size
      type
      hit_dice
      hit_points
      armor_class {
        type
        value
      }
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
    }
  }
`;
