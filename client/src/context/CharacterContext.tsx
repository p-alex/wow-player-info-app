import { createContext, useState, useContext } from "react";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";

interface CharacterContext {
  selectedItemStats: EquippedItemsEntity | null;
  handleSelectItemStats: (itemStats: EquippedItemsEntity | undefined) => void;
  handleResetItemStats: () => void;
}

const CharacterContext = createContext<CharacterContext>({
  selectedItemStats: null,
  handleSelectItemStats: (itemStats) => {},
  handleResetItemStats: () => {},
});

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedItemStats, setSelectedItemStats] =
    useState<EquippedItemsEntity | null>(null);

  const handleSelectItemStats = (
    itemStats: EquippedItemsEntity | undefined
  ) => {
    if (!itemStats) return;
    setSelectedItemStats(itemStats);
  };

  const handleResetItemStats = () => {
    setSelectedItemStats(null);
  };

  return (
    <CharacterContext.Provider
      value={{ selectedItemStats, handleSelectItemStats, handleResetItemStats }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);

export default CharacterContextProvider;
