import { axiosPrivate } from ".";
import { DefaultResponse } from "../containers/RefreshTokenOnLoad";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";
import { CharacterMedia } from "../interfaces/CharacterMedia";
import { CharacterSummary } from "../interfaces/CharacterSummary";
import makeUrl from "../utils/makeUrl";
import { EquipmentType } from "../utils/normalizeEquipment";
import normalizeMediaAssets from "../utils/normalizeMediaAssets";

interface RequestInfo {
  region: string;
  realm_slug: string;
  char_name: string;
  access_token: string;
}

export const getCharacterSummary = (info: RequestInfo) =>
  axiosPrivate
    .get<DefaultResponse<CharacterSummary>>(
      makeUrl({
        region: info.region,
        realm_slug: info.realm_slug,
        char_name: info.char_name,
        toFetch: "summary",
      }),
      {
        headers: {
          Authorization: "Bearer " + info.access_token,
        },
      }
    )
    .then((res) => res.data.data);

export const getCharacterMedia = (info: RequestInfo) =>
  axiosPrivate
    .get<DefaultResponse<CharacterMedia>>(
      makeUrl({
        region: info.region,
        realm_slug: info.realm_slug,
        char_name: info.char_name,
        toFetch: "media",
      }),
      {
        headers: {
          Authorization: "Bearer " + info.access_token,
        },
      }
    )
    .then((res) => {
      if (!res || !res?.data || !res?.data?.data) return null;
      const assets = normalizeMediaAssets({ assets: res.data.data.assets });
      return assets;
    });

export const getCharacterEquipment = (info: RequestInfo) =>
  axiosPrivate
    .get<
      DefaultResponse<{
        equipment: { [key in EquipmentType]: EquippedItemsEntity };
        media: { [key in EquipmentType]: string };
      }>
    >(
      makeUrl({
        region: info.region,
        realm_slug: info.realm_slug,
        char_name: info.char_name,
        toFetch: "equipment",
      }),
      {
        headers: {
          Authorization: "Bearer " + info.access_token,
        },
      }
    )
    .then((res) => res.data.data);
