import { useState } from "react";
import ItemSlot from "./ItemSlot";
import { useQuery } from "@tanstack/react-query";
import { getCharacterEquipment } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import { CharacterSummary } from "../interfaces/CharacterSummary";
import Spinner from "./Spinner/Spinner";
import { useRegion } from "../context/RegionContext";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";

const CharacterEquipment = ({ character }: { character: CharacterSummary }) => {
  const [error, setError] = useState("");
  const { auth } = useAuth();
  const { region } = useRegion();

  const { isLoading, data } = useQuery({
    queryKey: [
      "character-equipment",
      region,
      character.realm.slug,
      character.name,
    ],
    queryFn: () =>
      getCharacterEquipment({
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
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Spinner />}
      {!error && (
        <div className="md:p-12 w-full mx-auto">
          <div className="w-full flex justify-between md:justify-around">
            <div className="flex flex-col gap-2">
              <ItemSlot stats={data?.equipment.head} image={data?.media.head} />
              <ItemSlot stats={data?.equipment.neck} image={data?.media.neck} />
              <ItemSlot
                stats={data?.equipment.shoulders}
                image={data?.media.shoulders}
              />
              <ItemSlot stats={data?.equipment.back} image={data?.media.back} />
              <ItemSlot
                stats={data?.equipment.chest}
                image={data?.media.chest}
              />
              <ItemSlot
                stats={data?.equipment.shirt}
                image={data?.media.shirt}
              />
              <ItemSlot
                stats={data?.equipment.tabard}
                image={data?.media.tabard}
              />
              <ItemSlot
                stats={data?.equipment.wrist}
                image={data?.media.wrist}
              />
            </div>

            <div className="flex flex-col gap-2">
              <ItemSlot
                stats={data?.equipment.hands}
                image={data?.media.hands}
              />
              <ItemSlot
                stats={data?.equipment.waist}
                image={data?.media.waist}
              />
              <ItemSlot stats={data?.equipment.legs} image={data?.media.legs} />
              <ItemSlot stats={data?.equipment.feet} image={data?.media.feet} />
              <ItemSlot
                stats={data?.equipment.ring1}
                image={data?.media.ring1}
              />
              <ItemSlot
                stats={data?.equipment.ring2}
                image={data?.media.ring2}
              />
              <ItemSlot
                stats={data?.equipment.trinket1}
                image={data?.media.trinket1}
              />
              <ItemSlot
                stats={data?.equipment.trinket2}
                image={data?.media.trinket2}
              />
            </div>
          </div>
          <div className="relative w-full flex gap-2 justify-center">
            <ItemSlot
              stats={data?.equipment.mainhand}
              image={data?.media.mainhand}
              isWeapon
            />
            <ItemSlot
              stats={data?.equipment.offhand}
              image={data?.media.offhand}
              isWeapon
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterEquipment;
