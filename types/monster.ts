export interface MonsterProps {
  monsterData: monsterData;
}

export interface monsterData {
  __typename: string;
  index: string;
  name: string;
  image: string | null;
  xp: number;
  size: string;
  type: string;
  hit_points: number;
  hit_dice: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armor_class: ArmorProps;
}

export interface ArmorProps {
  0: ArmorInnerProps;
}

export interface ArmorInnerProps {
  value: number;
  type: string;
}
