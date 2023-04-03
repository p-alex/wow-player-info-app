import { CharacterSummary } from "../interfaces/CharacterSummary";
import CharacterHeader from "./CharacterHeader";
import ItemSlot from "./ItemSlot";
import { useQuery } from "@tanstack/react-query";
import { getCharacterEquipment, getCharacterMedia } from "../api/requests";
import { useAuth } from "../context/AuthContext";

const CharacterDisplay = ({ character }: { character: CharacterSummary }) => {
  const { auth } = useAuth();

  const characterMedia = useQuery({
    queryKey: ["character-media", character.realm.slug, character.name],
    queryFn: () =>
      getCharacterMedia({
        region: "eu",
        realm_slug: character.realm.slug,
        char_name: character.name.toLowerCase(),
        access_token: auth.accessToken,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 60,
  });

  const characterEquipment = useQuery({
    queryKey: ["character-equipment", character.realm.slug, character.name],
    queryFn: () =>
      getCharacterEquipment({
        region: "eu",
        realm_slug: character.realm.slug,
        char_name: character.name.toLowerCase(),
        access_token: auth.accessToken,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 60,
  });

  return (
    <div
      className="max-w-[1100px] aspect-[4/3] bg-cover bg-center bg-no-repeat mx-auto"
      style={{ backgroundImage: `url(${characterMedia.data?.["main"]})` }}
      id={"character-display"}
    >
      <CharacterHeader character={character} />
      {/* <CharacterNavigation /> */}
      <div className="md:p-12 w-full mx-auto">
        <div className="w-full flex justify-between md:justify-around">
          <div className="flex flex-col gap-2">
            <ItemSlot
              stats={characterEquipment.data?.equipment.head}
              image={characterEquipment.data?.media.head}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.neck}
              image={characterEquipment.data?.media.neck}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.shoulders}
              image={characterEquipment.data?.media.shoulders}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.back}
              image={characterEquipment.data?.media.back}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.chest}
              image={characterEquipment.data?.media.chest}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.shirt}
              image={characterEquipment.data?.media.shirt}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.tabard}
              image={characterEquipment.data?.media.tabard}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.wrist}
              image={characterEquipment.data?.media.wrist}
            />
          </div>

          <div className="flex flex-col gap-2">
            <ItemSlot
              stats={characterEquipment.data?.equipment.hands}
              image={characterEquipment.data?.media.hands}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.waist}
              image={characterEquipment.data?.media.waist}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.legs}
              image={characterEquipment.data?.media.legs}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.feet}
              image={characterEquipment.data?.media.feet}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.ring1}
              image={characterEquipment.data?.media.ring1}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.ring2}
              image={characterEquipment.data?.media.ring2}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.trinket1}
              image={characterEquipment.data?.media.trinket1}
            />
            <ItemSlot
              stats={characterEquipment.data?.equipment.trinket2}
              image={characterEquipment.data?.media.trinket2}
            />
          </div>
        </div>
        <div className="relative w-full flex gap-2 justify-center">
          <ItemSlot
            stats={characterEquipment.data?.equipment.mainhand}
            image={characterEquipment.data?.media.mainhand}
            isWeapon
          />
          <ItemSlot
            stats={characterEquipment.data?.equipment.offhand}
            image={characterEquipment.data?.media.offhand}
            isWeapon
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDisplay;
