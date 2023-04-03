import { AssetsEntity } from "../interfaces/CharacterMedia";

export type Assets = {
  [key in "main-raw" | "main" | "inset" | "profile"]: string;
};

const normalizeMediaAssets = ({ assets }: { assets: AssetsEntity[] }) => {
  return assets.reduce((acc, curr) => {
    // @ts-ignore
    acc[curr.key] = curr.value;
    return acc;
  }, {}) as Assets;
};

export default normalizeMediaAssets;
