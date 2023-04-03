const makeUrl = ({
  region,
  realm_slug,
  char_name,
  toFetch,
}: {
  region: string;
  realm_slug: string;
  char_name: string;
  toFetch: "media" | "equipment" | "summary";
}) => {
  return (
    `/profile/character-${toFetch}?region=` +
    region +
    "&realm_slug=" +
    realm_slug +
    "&char_name=" +
    char_name
  );
};

export default makeUrl;
