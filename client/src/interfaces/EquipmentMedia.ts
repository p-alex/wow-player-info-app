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
