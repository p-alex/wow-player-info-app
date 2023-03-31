import { Character } from "./ProtectedCharacter";

export interface CharacterEquipment {
  _links: Links;
  character: Character;
  equipped_items?: EquippedItemsEntity[] | null;
  equipped_item_sets?: SetOrEquippedItemSetsEntity[] | null;
}
export interface Links {
  self: SelfOrKey;
}
export interface SelfOrKey {
  href: string;
}
export interface EquippedItemsEntity {
  item: ItemOrMedia;
  slot: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
  quantity: number;
  context: number;
  bonus_list?: number[] | null;
  quality: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
  name: string;
  media: ItemOrMedia;
  item_class: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  item_subclass: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  inventory_type: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
  binding: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
  armor?: Armor | null;
  stats?: StatsEntity[] | null;
  sell_price: SellPrice;
  level: LevelOrDurabilityOrAttackSpeedOrDps;
  durability?: LevelOrDurabilityOrAttackSpeedOrDps1 | null;
  requirements?: Requirements | null;
  set?: SetOrEquippedItemSetsEntity1 | null;
  timewalker_level?: number | null;
  is_subclass_hidden?: boolean | null;
  weapon?: Weapon | null;
  spells?: SpellsEntity[] | null;
}
export interface ItemOrMedia {
  key: SelfOrKey;
  id: number;
}
export interface TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass {
  type: string;
  name: string;
}
export interface ItemClassOrItemSubclassOrItemOrItemSetOrSpell {
  key: SelfOrKey;
  name: string;
  id: number;
}
export interface Armor {
  value: number;
  display: Display;
}
export interface Display {
  display_string: string;
  color: Color;
}
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}
export interface StatsEntity {
  type: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
  value: number;
  display: Display;
  is_negated?: boolean | null;
  is_equip_bonus?: boolean | null;
}
export interface SellPrice {
  value: number;
  display_strings: DisplayStrings;
}
export interface DisplayStrings {
  header: string;
  gold: string;
  silver: string;
  copper: string;
}
export interface LevelOrDurabilityOrAttackSpeedOrDps {
  value: number;
  display_string: string;
}
export interface LevelOrDurabilityOrAttackSpeedOrDps1 {
  value: number;
  display_string: string;
}
export interface Requirements {
  level: LevelOrDurabilityOrAttackSpeedOrDps;
}
export interface SetOrEquippedItemSetsEntity1 {
  item_set: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  items?: ItemsEntity[] | null;
  effects?: EffectsEntity[] | null;
  display_string: string;
}
export interface ItemsEntity {
  item: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  is_equipped?: boolean | null;
}
export interface EffectsEntity {
  display_string: string;
  required_count: number;
}
export interface Weapon {
  damage: Damage;
  attack_speed: LevelOrDurabilityOrAttackSpeedOrDps;
  dps: LevelOrDurabilityOrAttackSpeedOrDps;
}
export interface Damage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: TypeOrSlotOrQualityOrInventoryTypeOrBindingOrDamageClass;
}
export interface SpellsEntity {
  spell: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  description: string;
}
export interface SetOrEquippedItemSetsEntity {
  item_set: ItemClassOrItemSubclassOrItemOrItemSetOrSpell;
  items?: ItemsEntity[] | null;
  effects?: EffectsEntity[] | null;
  display_string: string;
}
