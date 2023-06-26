export interface MonsterProps {
  monsterData: monsterData;
}

export interface monsterData {
  name: string;
  index: string;
  challenge_rating: number;
  image: string | null;
  xp: number;
  size: string;
  type: string;
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armor_class: ArmorProps;
  speed: Speed;
  languages: string;
  senses: Senses;
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  damage_immunities: string[];
  proficiencies: ProficienciesProps;
  special_abilities: SpecialAbilitiesProps;
}

export interface ArmorProps {
  0: ArmorInnerProps;
}

export interface ArmorInnerProps {
  value: number;
  type: string;
}

export interface ProficienciesProps {
  value: number;
  proficiency: ProficienyProps;
}

export interface ProficienyProps {
  name: string;
}

export interface Speed {
  burrow: string;
  climb: string | null;
  fly: string;
  swim: string;
  walk: string;
}

export interface Senses {
  blindsight: string;
  darkvision: string;
  passive_perception: string;
  tremorsense: string;
  truesight: string;
}

export interface SpecialAbilitiesProps {
  name: string;
  desc: string;
  attack_bonus: number;
  damage: DamageProps;
  dc: DCProps;
  //spellcasting: SpellcastingPropsGroup;
  usage: UsageProps;
}

export interface UsageProps {
  type: string;
  times: number;
  rest_types: string[];
}

export interface DamageProps {
  damage_dice: string;
  damage_type: DamageTypeProps;
}

export interface DamageTypeProps {
  name: string;
}

/*
export interface SpellcastingPropsGroup {
  ability: SpellcastingProps;
  school: string;
  dc: number;
  components_required: [string];
}

export interface SpellcastingProps {
  name: string;
}
*/

export interface DCProps {
  type: DCTypeProps;
}

export interface DCTypeProps {
  name: string;
}
