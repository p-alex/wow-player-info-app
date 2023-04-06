import { CharacterSummary } from "../interfaces/CharacterSummary";
import CharacterHeader from "./CharacterHeader";
import { useQuery } from "@tanstack/react-query";
import { getCharacterMedia } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import CharacterEquipment from "./CharacterEquipment";
import { useRegion } from "../context/RegionContext";

const CharacterDisplay = ({ character }: { character: CharacterSummary }) => {
  const { auth } = useAuth();
  const { region } = useRegion();

  const characterMedia = useQuery({
    queryKey: ["character-media", character.realm.slug, character.name],
    queryFn: () =>
      getCharacterMedia({
        region,
        realm_slug: character.realm.slug,
        char_name: character.name.toLowerCase(),
        access_token: auth.accessToken,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div
      className="aspect-[4/3] bg-cover bg-center bg-no-repeat mx-auto p-2 rounded-md"
      style={{ backgroundImage: `url(${characterMedia.data?.["main"]})` }}
      id={"character-display"}
    >
      <CharacterHeader character={character} />
      <CharacterEquipment character={character} />
    </div>
  );
};
export default CharacterDisplay;
