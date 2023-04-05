import React, { useState } from "react";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";
import ItemStatsBubble from "./ItemStatsBubble";
import ItemStatsModal from "./ItemStatsModal";
import { useCharacter } from "../context/CharacterContext";

export const QUALITY_COLORS = {
  Epic: { border: "border-purple-500", text: "text-purple-500" },
  Rare: { border: "border-blue-500", text: "text-blue-500" },
  Heirloom: { border: "border-blue-300", text: "text-blue-300" },
  Uncommon: { border: "border-white", text: "text-white" },
  Common: { border: "border-green-500", text: "text-green-500" },
};

const ItemSlot = ({
  stats,
  isWeapon,
  image,
}: {
  stats: EquippedItemsEntity | undefined;
  isWeapon?: boolean;
  image?: string;
}) => {
  const { selectedItemStats, handleSelectItemStats } = useCharacter();
  const [isStatsBubbleActive, setIsStatsBubbleActive] = useState(false);
  const [statsPos, setStatsPos] = useState<"right" | "left">("right");

  const handleStatsPos = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => {
    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;
    if (mouseX < windowWidth / 2) {
      setStatsPos("right");
    } else if (mouseX > windowWidth / 2) {
      setStatsPos("left");
    }
  };

  const itemQuality = stats?.quality.name as keyof typeof QUALITY_COLORS;

  return (
    <>
      {selectedItemStats && selectedItemStats.item.id === stats?.item.id && (
        <ItemStatsModal stats={stats} image={image} />
      )}
      <button
        className={`relative w-[50px] h-[50px] bg-slate-900 border ${
          itemQuality ? QUALITY_COLORS[itemQuality]?.border : "border-slate-700"
        } bg-contain bg-no-repeat bg-center`}
        style={{ backgroundImage: "url(" + image + ")" }}
        onMouseEnter={handleStatsPos}
        onMouseOver={() => setIsStatsBubbleActive(true)}
        onMouseLeave={() => setIsStatsBubbleActive(false)}
        onClick={() => handleSelectItemStats(stats)}
        id={stats?.item.id.toString()}
      >
        {isStatsBubbleActive && (
          <ItemStatsBubble
            stats={stats}
            isWeapon={isWeapon}
            statsPos={statsPos}
          />
        )}
      </button>
    </>
  );
};

export default ItemSlot;
