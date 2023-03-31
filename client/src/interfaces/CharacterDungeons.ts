export interface CharacterDungeons {
  _links: Links;
  expansions?: ExpansionsEntity[] | null;
}
export interface Links {
  self: SelfOrKey;
}
export interface SelfOrKey {
  href: string;
}
export interface ExpansionsEntity {
  expansion: EncounterOrInstanceOrExpansion;
  instances?: InstancesEntity[] | null;
}
export interface EncounterOrInstanceOrExpansion {
  key: SelfOrKey;
  name: string;
  id: number;
}
export interface InstancesEntity {
  instance: EncounterOrInstanceOrExpansion;
  modes?: ModesEntity[] | null;
}
export interface ModesEntity {
  difficulty: DifficultyOrStatus;
  status: DifficultyOrStatus;
  progress: Progress;
}
export interface DifficultyOrStatus {
  type: string;
  name: string;
}
export interface Progress {
  completed_count: number;
  total_count: number;
  encounters?: EncountersEntity[] | null;
}
export interface EncountersEntity {
  encounter: EncounterOrInstanceOrExpansion;
  completed_count: number;
  last_kill_timestamp: number;
}
