import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterSummary } from "../interfaces/CharacterSummary";
import { getCharacterStatistics } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import {
  HealthIcon,
  IntellectIcon,
  StaminaIcon,
  AgilityIcon,
  StrengthIcon,
  HasteIcon,
  MasteryIcon,
  CriticalStrikeIcon,
  VersatilityIcon,
} from "../svgs";
import { useRegion } from "../context/RegionContext";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";

const CharacterStatistics = ({
  character,
}: {
  character: CharacterSummary;
}) => {
  const [error, setError] = useState("");
  const { auth } = useAuth();
  const { region } = useRegion();

  const { data, isLoading } = useQuery({
    enabled: typeof character.id === "number",
    queryKey: [
      "character-statistics",
      region,
      character.realm.slug,
      character.name,
    ],
    queryFn: () =>
      getCharacterStatistics({
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
    staleTime: 1000 * 60 * 60 * 1,
  });

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && !error && (
        <section className="my-8">
          <h2 className="text-3xl mb-4">Statistics</h2>
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "16px",
              }}
            >
              <div className="flex items-center gap-2">
                {<HealthIcon />}
                <div className="flex flex-col">
                  <p>{data?.health}</p>
                  <h3 className="text-2xl font-bold">Health</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<StaminaIcon />}
                <div className="flex flex-col">
                  <p>{data?.stamina.effective}</p>
                  <h3 className="text-2xl font-bold">Stamina</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<StrengthIcon />}
                <div className="flex flex-col">
                  <p>{data?.strength.effective}</p>
                  <h3 className="text-2xl font-bold">Strength</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<IntellectIcon />}
                <div className="flex flex-col">
                  <p>{data?.intellect.effective}</p>
                  <h3 className="text-2xl font-bold">Intellect</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<AgilityIcon />}
                <div className="flex flex-col">
                  <p>{data?.agility.effective}</p>
                  <h3 className="text-2xl font-bold">Agility</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<VersatilityIcon />}
                <div className="flex flex-col">
                  <p>{data?.versatility}</p>
                  <h3 className="text-2xl font-bold">Versatility</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<MasteryIcon />}
                <div className="flex flex-col">
                  <p>{data?.mastery.rating}%</p>
                  <h3 className="text-2xl font-bold">Mastery</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<HasteIcon />}
                <div className="flex flex-col">
                  <p>{data?.spell_haste.rating}%</p>
                  <h3 className="text-2xl font-bold">Spell Haste</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {<CriticalStrikeIcon />}
                <div className="flex flex-col">
                  <p>{data?.spell_crit.rating}%</p>
                  <h3 className="text-2xl font-bold">Spell Crit</h3>
                </div>
              </div>
            </div>
          </>
        </section>
      )}
    </>
  );
};

export default CharacterStatistics;
