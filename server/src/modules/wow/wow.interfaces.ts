export interface Summary {
  _links: Links;
  id: number;
  wow_accounts?: WowAccountsEntity[] | null;
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
  characters?: CharactersEntity[] | null;
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

// #############################################

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

// ###############################################

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

// ##################################################

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

// ####################################################

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

// ###########################################

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

// #################################

export interface CharacterSummary {
  _links: Links;
  id: number;
  name: string;
  gender: GenderOrFaction;
  faction: GenderOrFaction;
  race: RaceOrCharacterClassOrActiveSpec;
  character_class: RaceOrCharacterClassOrActiveSpec;
  active_spec: RaceOrCharacterClassOrActiveSpec;
  realm: Realm;
  level: number;
  experience: number;
  achievement_points: number;
  achievements: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  titles: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  pvp_summary: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  encounters: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  media: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  hunter_pets: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  statistics: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  mythic_keystone_profile: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  equipment: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  appearance: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  collections: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  reputations: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  quests: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  achievements_statistics: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  professions: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
}
export interface Links {
  self: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
}
export interface SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions {
  href: string;
}
export interface GenderOrFaction {
  type: string;
  name: string;
}
export interface RaceOrCharacterClassOrActiveSpec {
  key: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  name: string;
  id: number;
}
export interface Realm {
  key: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrHunterPetsOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  name: string;
  id: number;
  slug: string;
}

// ################################################

export interface EquipmentMedia {
  _links: Links;
  assets?: AssetsEntity[] | null;
  id: number;
}
export interface Links {
  self: Self;
}
export interface Self {
  href: string;
}
export interface AssetsEntity {
  key: string;
  value: string;
  file_data_id: number;
}
