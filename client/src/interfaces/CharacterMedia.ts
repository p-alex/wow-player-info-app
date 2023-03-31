import { Realm } from "./Summary";

export interface CharacterMedia {
  _links: Links;
  character: Character;
  assets: AssetsEntity[];
}
export interface Links {
  self: SelfOrKey;
}
export interface SelfOrKey {
  href: string;
}
export interface Character {
  key: SelfOrKey;
  name: string;
  id: number;
  realm: Realm;
}
export interface AssetsEntity {
  key: string;
  value: string;
}
