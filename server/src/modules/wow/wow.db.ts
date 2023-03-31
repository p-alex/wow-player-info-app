import axios from "axios";
import {
  CharacterDungeons,
  CharacterEquipment,
  CharacterMedia,
  CharacterQuests,
  ProtectedCharacter,
  Summary,
} from "./wow.interfaces";

class WowDB {
  makeWowDB() {
    return Object.freeze({
      getSummary: this.getSummary,
      getCharacterMedia: this.getCharacterMedia,
      getCharacterEquipment: this.getCharacterEquipment,
      getCharacterQuests: this.getCharacterQuests,
      getCharacterDungeons: this.getCharacterDungeons,
      getProtectedCharacterData: this.getProtectedCharacterData,
      getItemInfo: this.getItemInfo,
    });
  }

  private getSummary = async ({ access_token }: { access_token: string }) => {
    const result = await axios.get<Summary[]>(
      `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_US&access_token=${access_token}`
    );
    return result;
  };

  private getCharacterMedia = async ({
    region,
    char_name,
    realm_slug,
    access_token,
  }: {
    region: string;
    char_name: string;
    realm_slug: string;
    access_token: string;
  }) => {
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

  private getItemInfo = async ({
    region,
    item_id,
  }: {
    region: string;
    item_id: string;
  }) => {
    const result = await axios.get(
      `https://${region}.api.blizzard.com/data/wow/media/item/${item_id}?namespace=static-10.0.7_48520-${region}`
    );
    return result.data;
  };

  private getCharacterEquipment = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: {
    region: string;
    realm_slug: string;
    char_name: string;
    access_token: string;
  }) => {
    const result = await axios.get<CharacterEquipment>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/equipment?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };

  private getCharacterDungeons = async ({
    region,
    realm_slug,
    char_name,
    access_token,
  }: {
    region: string;
    realm_slug: string;
    char_name: string;
    access_token: string;
  }) => {
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
  }: {
    region: string;
    realm_slug: string;
    char_name: string;
    access_token: string;
  }) => {
    const result = await axios.get<CharacterQuests>(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm_slug}/${char_name}/quests?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    );
    return result.data;
  };
}

export default WowDB;
