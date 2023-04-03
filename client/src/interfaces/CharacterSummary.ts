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
  achievements: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  titles: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  pvp_summary: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  encounters: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  media: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  statistics: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  mythic_keystone_profile: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  equipment: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  appearance: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  collections: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  active_title: ActiveTitle;
  reputations: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  quests: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  achievements_statistics: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  professions: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
}
export interface Links {
  self: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
}
export interface SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions {
  href: string;
}
export interface GenderOrFaction {
  type: string;
  name: string;
}
export interface RaceOrCharacterClassOrActiveSpec {
  key: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  name: string;
  id: number;
}
export interface Realm {
  key: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  name: string;
  id: number;
  slug: string;
}
export interface ActiveTitle {
  key: SelfOrKeyOrAchievementsOrTitlesOrPvpSummaryOrEncountersOrMediaOrSpecializationsOrStatisticsOrMythicKeystoneProfileOrEquipmentOrAppearanceOrCollectionsOrReputationsOrQuestsOrAchievementsStatisticsOrProfessions;
  name: string;
  id: number;
  display_string: string;
}
