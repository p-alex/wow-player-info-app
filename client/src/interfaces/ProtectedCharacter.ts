import { Realm } from './Summary';

export interface ProtectedCharacter {
  _links: Links;
  id: number;
  name: string;
  money: number;
  character: Character;
  protected_stats: ProtectedStats;
  position: PositionOrBindPosition;
  bind_position: PositionOrBindPosition;
  wow_account: number;
}
export interface Links {
  self: SelfOrUserOrProfileOrKey;
  user: SelfOrUserOrProfileOrKey;
  profile: SelfOrUserOrProfileOrKey;
}
export interface SelfOrUserOrProfileOrKey {
  href: string;
}
export interface Character {
  key: SelfOrUserOrProfileOrKey;
  name: string;
  id: number;
  realm: Realm;
}
export interface ProtectedStats {
  total_number_deaths: number;
  total_gold_gained: number;
  total_gold_lost: number;
  total_item_value_gained: number;
  level_number_deaths: number;
  level_gold_gained: number;
  level_gold_lost: number;
  level_item_value_gained: number;
}
export interface PositionOrBindPosition {
  zone: ZoneOrMap;
  map: ZoneOrMap;
  x: number;
  y: number;
  z: number;
  facing: number;
}
export interface ZoneOrMap {
  name: string;
  id: number;
}
