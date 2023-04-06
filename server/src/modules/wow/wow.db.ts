import axios from "axios";
import {
  CharacterDungeons,
  CharacterEquipment,
  CharacterMedia,
  CharacterQuests,
  CharacterStatistics,
  CharacterSummary,
  EquipmentMedia,
  EquippedItemsEntity,
  ProtectedCharacter,
  Summary,
} from "./wow.interfaces";

interface GetDbInfo {
  region: string;
  char_name: string;
  realm_slug: string;
  access_token: string;
}

class WowDB {
  makeWowDB() {
    return Object.freeze({
      getSummary: this.getSummary,
      getCharacterMedia: this.getCharacterMedia,
      getCharacterEquipment: this.getCharacterEquipment,
      getCharacterQuests: this.getCharacterQuests,
      getCharacterStatistics: this.getCharacterStatistics,
      getCharacterDungeons: this.getCharacterDungeons,
      getProtectedCharacterData: this.getProtectedCharacterData,
      getCharacterSummary: this.getCharacterSummary,
      getEquipmentMedia: this.getEquipmentMedia,
    });
  }

  private getSummary = async ({
    access_token,
    region,
  }: {
    access_token: string;
    region: string;
  }) => {
    const result = await axios.get<Summary[]>(
      `https://${region}.api.blizzard.com/profile/user/wow?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result;
  };

  private getCharacterMedia = async ({
    region,
    char_name,
    realm_slug,
    access_token,
  }: GetDbInfo) => {
    const result = await axios.get<CharacterMedia>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug.toLowerCase()}/${char_name.toLowerCase()}/character-media?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };

  private getProtectedCharacterData = async ({
    region,
    realm_id,
    char_id,
    access_token,
  }: {
    region: string;
    realm_id: string;
    char_id: string;
    access_token: string;
  }) => {
    const result = await axios.get<ProtectedCharacter>(
      `https://${region}.api.blizzard.com/profile/user/wow/protected-character/${realm_id}-${char_id}?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };

  private getCharacterSummary = async ({
    region,
    char_name,
    realm_slug,
    access_token,
  }: GetDbInfo) => {
    const characterSummary = await axios.get<CharacterSummary>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return characterSummary.data;
  };

  private getEquipmentMedia = async ({
    equipment,
    access_token,
  }: {
    equipment: EquippedItemsEntity[];
    access_token: string;
  }) => {
    let mediaResult = {} as { [key: string]: string };

    for (let i = 0; i < equipment.length; i++) {
      const mediaLink = equipment[i].media.key.href;
      const itemMediaRequest = await axios.get<EquipmentMedia>(mediaLink, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      const itemName = equipment[i].slot.name.toLowerCase().replace(" ", "");
      mediaResult[itemName] = itemMediaRequest.data.assets
        ? itemMediaRequest.data.assets[0].value
        : "";
    }

    return mediaResult;
  };

  private getCharacterEquipment = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: GetDbInfo) => {
    const equipmentResponse = await axios.get<CharacterEquipment>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/equipment?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );

    const equipment = equipmentResponse.data.equipped_items;

    if (!equipment) return null;

    const equipmentResult = equipmentResponse.data.equipped_items?.reduce(
      (acc, curr) => {
        acc[curr.slot.name.toLowerCase().replace(" ", "")] = curr;
        return acc;
      },
      {} as { [key: string]: EquippedItemsEntity }
    );

    const mediaResult = await this.getEquipmentMedia({
      equipment,
      access_token,
    });

    return { equipment: equipmentResult, media: mediaResult };
  };

  private getCharacterStatistics = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: GetDbInfo) => {
    const result = await axios.get<CharacterStatistics>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/statistics?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };

  private getCharacterDungeons = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: GetDbInfo) => {
    const result = await axios.get<CharacterDungeons>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/encounters/dungeons?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };

  private getCharacterQuests = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: GetDbInfo) => {
    const result = await axios.get<CharacterQuests>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/quests?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };
}

export default WowDB;
