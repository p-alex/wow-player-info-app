import { Character } from './CharacterMedia';
import { Links } from './Summary';

export interface ICharacterStatistics {
  _links: Links;
  health: number;
  power: number;
  power_type: PowerType;
  speed: SpeedOrAvoidance;
  strength: StrengthOrAgilityOrIntellectOrStaminaOrArmor;
  agility: StrengthOrAgilityOrIntellectOrStaminaOrArmor;
  intellect: StrengthOrAgilityOrIntellectOrStaminaOrArmor;
  stamina: StrengthOrAgilityOrIntellectOrStaminaOrArmor;
  melee_crit: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  melee_haste: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  mastery: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  bonus_armor: number;
  lifesteal: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  versatility: number;
  versatility_damage_done_bonus: number;
  versatility_healing_done_bonus: number;
  versatility_damage_taken_bonus: number;
  avoidance: SpeedOrAvoidance;
  attack_power: number;
  main_hand_damage_min: number;
  main_hand_damage_max: number;
  main_hand_speed: number;
  main_hand_dps: number;
  off_hand_damage_min: number;
  off_hand_damage_max: number;
  off_hand_speed: number;
  off_hand_dps: number;
  spell_power: number;
  spell_penetration: number;
  spell_crit: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  mana_regen: number;
  mana_regen_combat: number;
  armor: StrengthOrAgilityOrIntellectOrStaminaOrArmor;
  dodge: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  parry: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  block: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  ranged_crit: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  ranged_haste: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  spell_haste: MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste;
  character: Character;
}
export interface SelfOrKey {
  href: string;
}
export interface PowerType {
  key: SelfOrKey;
  name: string;
  id: number;
}
export interface SpeedOrAvoidance {
  rating: number;
  rating_bonus: number;
}
export interface StrengthOrAgilityOrIntellectOrStaminaOrArmor {
  base: number;
  effective: number;
}
export interface MeleeCritOrMeleeHasteOrMasteryOrLifestealOrSpellCritOrDodgeOrParryOrBlockOrRangedCritOrRangedHasteOrSpellHaste {
  rating: number;
  rating_bonus: number;
  value: number;
}
