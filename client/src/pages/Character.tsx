import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CharacterDisplay from "../components/CharacterDisplay";
import { getCharacterSummary } from "../api/requests";
import { useAuth } from "../context/AuthContext";

const Character = () => {
  const { auth } = useAuth();

  const { realm_slug, char_name } = useParams() as {
    realm_slug: string;
    char_name: string;
  };

  const characterSummary = useQuery({
    queryKey: ["character-summary", char_name],
    queryFn: () =>
      getCharacterSummary({
        region: "eu",
        realm_slug,
        char_name,
        access_token: auth.accessToken,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 20,
  });

  return (
    <main className="p-4">
      {characterSummary?.data && (
        <CharacterDisplay character={characterSummary.data} />
      )}
    </main>
  );
};

export default Character;
