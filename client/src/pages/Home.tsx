import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../context/AuthContext";
import { getAccountSummary } from "../api/requests";
import { useRegion } from "../context/RegionContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const { auth } = useAuth();

  const { region } = useRegion();

  const { data, isLoading, error } = useQuery({
    queryKey: ["char-list", auth.battleTag, region],
    queryFn: () => getAccountSummary({ region, accessToken: auth.accessToken }),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  if (!data || !data?.data) {
    return null;
  }

  if (error) {
    // @ts-ignore
    return <p>{error}</p>;
  }

  const characters = data.data.wow_accounts[0].characters;

  const filteredCharacters = characters?.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-4">
      {isLoading && <Spinner />}
      <section>
        <div className="flex w-full items-center justify-between mb-4">
          <h2 className="text-2xl">
            Character list ({data.data?.wow_accounts[0].characters.length})
          </h2>
          <div>
            <label className="block mb-2 text-1xl" htmlFor="search">
              Search
            </label>
            <input
              className="block py-2 px-4 rounded-lg text-1xl bg-slate-900 border border-slate-700"
              id="search"
              placeholder="search for a character..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />
          </div>
        </div>

        <div className="grid">
          {filteredCharacters &&
            filteredCharacters.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
        </div>
      </section>
    </main>
  );
};

export default Home;
