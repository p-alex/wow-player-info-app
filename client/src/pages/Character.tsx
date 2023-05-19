import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import CharacterDisplay from "../components/CharacterDisplay";
import { getCharacterSummary } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import CharacterContextProvider from "../context/CharacterContext";
import CharacterStatistics from "../components/CharacterStatistics";
import { useRegion } from "../context/RegionContext";
import { AxiosError } from "axios";
import ErrorMessage from "../components/ErrorMessage";

const Character = () => {
  const [error, setError] = useState("");
  const { auth } = useAuth();
  const { region } = useRegion();

  const { realm_slug, char_name } = useParams() as {
    realm_slug: string;
    char_name: string;
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["character-summary", char_name],
    enabled: auth.accessToken !== "",
    queryFn: () =>
      getCharacterSummary({
        region,
        realm_slug,
        char_name,
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
    <main className="max-w-[1100px] mx-auto p-4 animate-fadeIn">
      {!auth.accessToken && (
        <p>
          You must{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            Login
          </Link>
          .
        </p>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {auth.accessToken && !isLoading && !error && data && (
        <CharacterContextProvider>
          <CharacterDisplay character={data} />
          <CharacterStatistics character={data} />
        </CharacterContextProvider>
      )}
    </main>
  );
};

export default Character;
