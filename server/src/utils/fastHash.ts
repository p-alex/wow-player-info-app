import md5 from "md5";

const fastHash = (string: string) => {
  return md5(string);
};

export default fastHash;

export type FastHashType = typeof fastHash;
