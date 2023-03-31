import { WowDbListType } from ".";
import { OAuthDbListType } from "../oauth";

interface ICharacterInfo {
  user_id: string;
  region: string;
  char_name: string;
  realm_slug: string;
}

interface IProtectedCharacterInfo {
  user_id: string;
  region: string;
  realm_id: string;
  char_id: string;
}

class WowService {
  private wowDbList: WowDbListType;
  private oauthDbList: OAuthDbListType;
  constructor({
    wowDbList,
    oauthDbList,
  }: {
    wowDbList: WowDbListType;
    oauthDbList: OAuthDbListType;
  }) {
    this.wowDbList = wowDbList;
    this.oauthDbList = oauthDbList;
  }

  makeWowServiceList() {
    return Object.freeze({
      getSummaryService: this.getSummaryService,
      getCharacterMediaService: this.getCharacterMediaService,
      getProtectedCharacterService: this.getProtectedCharacterService,
      getItemInfoService: this.getItemInfoService,
      getCharacterEquipmentService: this.getCharacterEquipmentService,
      getCharacterDungeonsService: this.getCharacterDungeonsService,
      getCharacterQuestsService: this.getCharacterQuestsService,
    });
  }

  private getSummaryService = async ({ user_id }: { user_id: string }) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });

    if (!bn_access_token)
      throw new Error("There is no battle net access token");

    const { data } = await this.wowDbList.getSummary({
      access_token: bn_access_token,
    });

    return data;
  };

  private getCharacterMediaService = async ({
    user_id,
    region,
    char_name,
    realm_slug,
  }: ICharacterInfo) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });
    if (!bn_access_token) throw new Error("No battle net access token");
    const result = await this.wowDbList.getCharacterMedia({
      region,
      char_name,
      realm_slug,
      access_token: bn_access_token,
    });
    return result;
  };

  private getProtectedCharacterService = async ({
    user_id,
    region,
    realm_id,
    char_id,
  }: IProtectedCharacterInfo) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });
    if (!bn_access_token) throw new Error("No battle net access token");

    const result = await this.wowDbList.getProtectedCharacterData({
      region,
      realm_id,
      char_id,
      access_token: bn_access_token,
    });

    return result;
  };

  private getItemInfoService = async ({
    region,
    item_id,
  }: {
    region: string;
    item_id: string;
  }) => {
    const result = await this.wowDbList.getItemInfo({
      region,
      item_id,
    });
    return result;
  };

  private getCharacterEquipmentService = async ({
    user_id,
    region,
    realm_slug,
    char_name,
  }: ICharacterInfo) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });
    if (!bn_access_token) throw new Error("No battle net access token");
    const result = await this.wowDbList.getCharacterEquipment({
      region,
      realm_slug,
      char_name,
      access_token: bn_access_token,
    });
    return result;
  };

  private getCharacterDungeonsService = async ({
    user_id,
    region,
    realm_slug,
    char_name,
  }: ICharacterInfo) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });
    if (!bn_access_token) throw new Error("No battle net access token");
    const result = await this.wowDbList.getCharacterDungeons({
      region,
      realm_slug,
      char_name,
      access_token: bn_access_token,
    });
    return result;
  };

  private getCharacterQuestsService = async ({
    user_id,
    region,
    realm_slug,
    char_name,
  }: ICharacterInfo) => {
    const bn_access_token = await this.oauthDbList.findBattleNetAccessToken({
      user_id,
    });
    if (!bn_access_token) throw new Error("No battle net access token");
    const result = await this.wowDbList.getCharacterQuests({
      region,
      realm_slug,
      char_name,
      access_token: bn_access_token,
    });
    return result;
  };
}

export default WowService;
