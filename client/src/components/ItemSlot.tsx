import React, { useState } from "react";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";

const QUALITY_COLORS = {
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
  const [isStatsActive, setIsStatsActive] = useState(false);
  const [statsPos, setStatsPos] = useState<"right" | "left">("right");

  const handleStatsPos = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;
    if (mouseX < windowWidth / 2) {
      setStatsPos("right");
    } else if (mouseX > windowWidth / 2) {
      setStatsPos("left");
    }
  };

  const showStatsToTop = "-top-2 translate-y-[-100%]";
  const showStatsToLeft = "right-0 translate-x-[-55px]";
  const showStatsToRight = "left-0 translate-x-[55px]";

  const itemQuality = stats?.quality.name as keyof typeof QUALITY_COLORS;

  return (
    <div
      className={`relative w-[50px] h-[50px] bg-slate-900 border ${
        itemQuality ? QUALITY_COLORS[itemQuality]?.border : "border-slate-700"
      } bg-contain bg-no-repeat bg-center`}
      style={{ backgroundImage: "url(" + image + ")" }}
      onMouseEnter={handleStatsPos}
      onMouseOver={() => setIsStatsActive(true)}
      onMouseLeave={() => setIsStatsActive(false)}
    >
      {isStatsActive && (
        <div
          className={`absolute w-max min-w-[220px] max-w-[300px] p-2 bg-gray-900 border ${
            itemQuality
              ? QUALITY_COLORS[itemQuality]?.border
              : "border-slate-700"
          } text-white z-10 text-sm animate-fadeIn ${
            isWeapon
              ? showStatsToTop
              : statsPos === "left"
              ? showStatsToLeft
              : showStatsToRight
          }`}
        >
          {!stats?.name && <p>No item.</p>}
          <p className={QUALITY_COLORS[itemQuality]?.text}>{stats?.name}</p>
          <p>{stats?.binding.name}</p>
          <div className="flex justify-between">
            <p>{stats?.slot.name}</p>
            <p>{stats?.item_subclass.name}</p>
          </div>
          <p>{stats?.weapon?.damage?.display_string}</p>
          <p>{stats?.armor?.display?.display_string}</p>
          {stats?.stats?.map((stat) => {
            return <p key={stat.type.name}>{stat.display?.display_string}</p>;
          })}
          <p className="text-green-500">{stats?.set?.display_string}</p>
          {stats?.set?.items?.map((item) => {
            return (
              <p
                className={`${
                  item.is_equipped ? "text-white" : "text-gray-500"
                } ml-2 text-xs`}
              >
                {item.item.name}
              </p>
            );
          })}
          <p>{stats?.durability?.display_string}</p>
          <p>{stats?.requirements?.level?.display_string}</p>
        </div>
      )}
    </div>
  );
};

export default ItemSlot;
