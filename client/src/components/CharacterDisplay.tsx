import { useState } from "react";
import { CharacterSummary } from "../interfaces/CharacterSummary";
import CharacterHeader from "./CharacterHeader";
import { useQuery } from "@tanstack/react-query";
import { getCharacterMedia } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import CharacterEquipment from "./CharacterEquipment";
import { useRegion } from "../context/RegionContext";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";

const CharacterDisplay = ({ character }: { character: CharacterSummary }) => {
  const [error, setError] = useState("");
  const { auth } = useAuth();
  const { region } = useRegion();

  const { isLoading, data } = useQuery({
    queryKey: ["character-media", character.realm.slug, character.name],
    queryFn: () =>
      getCharacterMedia({
        region,
        realm_slug: character.realm.slug,
        char_name: character.name.toLowerCase(),
        access_token: auth.accessToken,
      }),
    onError: (error) => {
      if (error instanceof AxiosError) {
        setError(error.response?.data.errors[0].message);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div
      className="aspect-[4/3] bg-cover bg-center bg-no-repeat mx-auto p-2 rounded-md"
      style={{
        backgroundImage: `url(${data?.main ? data.main : data?.["main-raw"]})`,
      }}
      id={"character-display"}
    >
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <CharacterHeader character={character} />
      <CharacterEquipment character={character} />
    </div>
  );
};
export default CharacterDisplay;
