import { Link } from "react-router-dom";
import { CharactersEntity } from "../interfaces/Summary";

const CharacterCard = ({ character }: { character: CharactersEntity }) => {
  return (
    <Link
      to={
        "/characters/" +
        character.realm.slug +
        "/" +
        character.playable_class.name.toLowerCase() +
        "/" +
        character.name.toLowerCase()
      }
    >
      <div className="flex items-center gap-4 p-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors">
        <img
          src={
            character.faction.name === "Horde"
              ? "/images/horde.webp"
              : "/images/alliance.webp"
          }
          width="60"
          height="60"
        />
        <div className="flex flex-col">
          <p>{character.playable_class.name}</p>
          <h3 className="text-2xl font-bold">
            {character.name}{" "}
            <span className="text-yellow-500">{character.level}</span>
          </h3>
          <p>{character.realm.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
