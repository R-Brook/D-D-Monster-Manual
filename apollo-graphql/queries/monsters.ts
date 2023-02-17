import { gql } from "@apollo/client";

export const MONSTER_QUERY = gql`
  query Monsters {
    monsters(limit: 400) {
      name
      image
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
