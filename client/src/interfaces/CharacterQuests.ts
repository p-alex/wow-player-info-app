import { Character } from './ProtectedCharacter';

export interface CharacterQuests {
  _links: QuestLinks;
  character: Character;
  in_progress?: InProgressEntity[] | null;
  completed: SelfOrKeyOrCompleted;
}
export interface QuestLinks {
  self: SelfOrKeyOrCompleted;
}
export interface SelfOrKeyOrCompleted {
  href: string;
}
export interface InProgressEntity {
  key: SelfOrKeyOrCompleted;
  name: string;
  id: number;
}
