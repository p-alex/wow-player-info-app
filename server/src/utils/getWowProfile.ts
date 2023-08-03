import axios from 'axios';

interface WowProfile {
  id: bigint;
  characters: Character[];
}

interface Character {
  character: {
    href: string;
  };
  protected_character: {
    href: string;
  };
  name: string;
  id: bigint;
  realm: Realm;
  playable_class: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  playable_race: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  gender: {
    type: 'MALE' | 'FEMALE';
    name: 'male' | 'female';
  };
  faction: {
    type: 'HORDE' | 'ALLIANCE';
    name: 'horde' | 'alliance';
  };
  level: number;
}

interface Realm {
  key: {
    href: string;
  };
  name: string;
  id: number;
  slug: string;
}

const getWowProfile = async ({ access_token }: { access_token: string }) => {
  const { data } = await axios.get<WowProfile>(`https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_US&access_token=${access_token}`);
  return data;
};

export default getWowProfile;
