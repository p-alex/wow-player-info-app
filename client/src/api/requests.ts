import { axiosPrivate } from ".";
import { DefaultResponse } from "../containers/RefreshTokenOnLoad";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";
import { CharacterMedia } from "../interfaces/CharacterMedia";
import { CharacterSummary } from "../interfaces/CharacterSummary";
import makeUrl from "../utils/makeUrl";
import { EquipmentType } from "../utils/normalizeEquipment";
import normalizeMediaAssets from "../utils/normalizeMediaAssets";
import { ICharacterStatistics } from "../interfaces/CharacterStatistics";
import { Summary } from "../interfaces/Summary";
import { SERVER_BASE_URL } from "../utils/server_base_url";

interface RequestInfo {
  region: string;
  realm_slug: string;
  char_name: string;
  access_token: string;
}

export const getAccountSummary = ({
  region,
  accessToken,
}: {
  region: string;
  accessToken: string;
}) =>
  axiosPrivate
    .get<DefaultResponse<Summary>>(
      SERVER_BASE_URL + "/profile/summary?region=" + region,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    .then((res) => res.data);

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

export const getCharacterStatistics = (info: RequestInfo) =>
  axiosPrivate
    .get<DefaultResponse<ICharacterStatistics>>(
      makeUrl({
        region: info.region,
        realm_slug: info.realm_slug,
        char_name: info.char_name,
        toFetch: "statistics",
      }),
      {
        headers: {
          Authorization: "Bearer " + info.access_token,
        },
      }
    )
    .then((res) => res.data.data);
