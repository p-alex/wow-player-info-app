import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosPrivate } from "../api";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../components/Spinner/Spinner";
import { DefaultResponse } from "../containers/RefreshTokenOnLoad";
import { Summary } from "../interfaces/Summary";
import { SERVER_BASE_URL } from "../utils/server_base_url";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const { auth } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["char-list", auth.battleTag],
    queryFn: () =>
      axiosPrivate
        .get<DefaultResponse<Summary>>(SERVER_BASE_URL + "/profile/summary", {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        })
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 10,
    retry: false,
  });

  if (!data || !data?.data) {
    return <p>No data found.</p>;
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
        <h2 className="text-4xl mb-4">
          Character list ({data.data?.wow_accounts[0].characters.length})
        </h2>
        <div className="my-8 w-full">
          <label className="block mb-2 text-1xl" htmlFor="search">
            Search
          </label>
          <input
            className="block w-full p-2 rounded-lg text-1xl bg-slate-900 border border-slate-700"
            id="search"
            placeholder="search for a character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
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
