import { AssetsEntity } from "../interfaces/CharacterMedia";

const normalizeMediaAssets = ({ assets }: { assets: AssetsEntity[] }) => {
  return assets.reduce((acc, curr) => {
    // @ts-ignore
    acc[curr.key] = curr.value;
    return acc;
  }, {}) as {
    [key in "main" | "main-raw" | "inset" | "avatar"]: string;
  };
};

export default normalizeMediaAssets;
