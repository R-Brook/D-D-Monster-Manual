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
      damage_resistances
      damage_vulnerabilities
      damage_immunities
      proficiencies {
        value
        proficiency {
          name
        }
      }
      special_abilities {
        name
        desc
        dc {
          type {
            name
          }
        }
        damage {
          damage_dice
          damage_type {
            name
          }
        }
        usage {
          type
          times
          rest_types
        }

        spellcasting {
          level
          ability {
            name
          }
          dc
          modifier
          components_required
          school
          slots {
            level
          }
          spells {
            spell {
              area_of_effect {
                size
                type
              }
              name
              level
              range
            }
          }
        }
      }
    }
  }
`;
