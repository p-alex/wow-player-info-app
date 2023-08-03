import { useQuery } from '@tanstack/react-query';
import { axiosPrivate } from '../api';
import { DefaultResponse } from '../containers/RefreshTokenOnLoad';
import { CharacterEquipment } from '../interfaces/CharacterEquipment';
import { useAuth } from '../context/AuthContext';

const useCharacterEquipment = ({ realm_slug, char_name }: { realm_slug: string; char_name: string }) => {
  const { auth } = useAuth();

  const url = '/profile/character-equipment?region=eu' + '&realm_slug=' + realm_slug + '&char_name=' + char_name;

  const handleGetCharacterEquipment = axiosPrivate.get<DefaultResponse<CharacterEquipment>>(url, {
    headers: {
      Authorization: 'Bearer ' + auth.accessToken,
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['character-equipment', realm_slug, char_name],
    queryFn: () => handleGetCharacterEquipment.then((res) => res.data),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 20,
    enabled: false,
  });

  return {
    equipment: data?.data,
    isEquipmentLoading: isLoading,
    equipmentError: error,
  };
};

export default useCharacterEquipment;
