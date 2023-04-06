import { CharacterSummary } from "../interfaces/CharacterSummary";

const CharacterHeader = ({ character }: { character: CharacterSummary }) => {
  return (
    <header className="flex items-center w-full p-4">
      <div className="flex items-center gap-4">
        <img
          src={
            character.faction.name === "Horde"
              ? "/images/horde.webp"
              : "/images/alliance.webp"
          }
          width={60}
          height={60}
          alt={character.faction.name}
        />
        <div className="">
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <p>{character?.active_title?.name}</p>
          <p>Lv. {character.level}</p>
        </div>
      </div>
    </header>
  );
};

export default CharacterHeader;
