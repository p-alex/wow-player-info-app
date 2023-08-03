import { EquippedItemsEntity } from '../interfaces/CharacterEquipment';

export type EquipmentType =
  | 'back'
  | 'chest'
  | 'feet'
  | 'hands'
  | 'legs'
  | 'mainhand'
  | 'offhand'
  | 'shoulders'
  | 'tabard'
  | 'waist'
  | 'wrist'
  | 'head'
  | 'ring1'
  | 'ring2'
  | 'neck'
  | 'trinket1'
  | 'trinket2'
  | 'shirt';

type Equipments = {
  [key in EquipmentType]: EquippedItemsEntity;
};

const normalizeEquipment = (equipment: EquippedItemsEntity[]) => {
  const newEquipment = equipment.reduce((acc, item) => {
    const key = item.slot.name.toLowerCase().replace(' ', '') as EquipmentType;
    acc[key] = item;
    return acc;
  }, {} as Equipments);
  return newEquipment;
};

export default normalizeEquipment;
