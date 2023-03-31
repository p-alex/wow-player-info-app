export interface Summary {
  _links: Links;
  id: number;
  wow_accounts: WowAccountsEntity[];
  collections: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
}
export interface Links {
  self: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  user: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  profile: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
}
export interface SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections {
  href: string;
}
export interface WowAccountsEntity {
  id: number;
  characters: CharactersEntity[];
}
export interface CharactersEntity {
  character: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  protected_character: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  name: string;
  id: number;
  realm: Realm;
  playable_class: PlayableClassOrPlayableRace;
  playable_race: PlayableClassOrPlayableRace;
  gender: GenderOrFaction;
  faction: GenderOrFaction;
  level: number;
}
export interface Realm {
  key: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  name: string;
  id: number;
  slug: string;
}
export interface PlayableClassOrPlayableRace {
  key: SelfOrUserOrProfileOrKeyOrCharacterOrProtectedCharacterOrCollections;
  name: string;
  id: number;
}
export interface GenderOrFaction {
  type: string;
  name: string;
}
