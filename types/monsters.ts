export interface MonstersProps {
  monstersData: monstersData[];
}

export interface monstersData {
  index: string;
  name: string;
  image: string;
  xp: number;
  size: string;
  type: string;
  hit_points: number;
  armor_class: ArmorProps[];
}

export interface ArmorProps {
  value: number;
}
