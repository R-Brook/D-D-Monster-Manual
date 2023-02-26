import { gql } from "@apollo/client";

export const MONSTER_QUERY = gql`
  query Monster($path: String!) {
    monster(index: $path) {
      name
      index
      challenge_rating
      image
      xp
      size
      type
      hit_dice
      hit_points
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      armor_class {
        type
        value
      }
      hit_points_roll
      speed {
        burrow
        climb
        fly
        swim
        walk
      }
      languages
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
    }
  }
`;
