import { useRef } from "react";
import { useCharacter } from "../context/CharacterContext";
import useDisableScroll from "../hooks/useDisableScroll";
import { EquippedItemsEntity } from "../interfaces/CharacterEquipment";
import FocusTrapRedirectFocus from "./FocusTrap";
import { QUALITY_COLORS } from "./ItemSlot";
import { AiOutlineClose } from "react-icons/ai";
const ItemStatsModal = ({
  stats,
  image,
}: {
  stats: EquippedItemsEntity | undefined;
  image?: string;
}) => {
  const { handleResetItemStats } = useCharacter();
  const itemQuality = stats?.quality.name as keyof typeof QUALITY_COLORS;

  const firstFocusableElement = useRef<HTMLButtonElement>(null);

  const handleCloseModal = () => {
    const lastFocusedElement = document.getElementById(
      stats!.item.id.toString()
    );
    lastFocusedElement?.focus();
    handleResetItemStats();
  };

  useDisableScroll();
  return (
    <div className="fixed left-0 top-0 w-full h-full flex sm:items-center sm:justify-center z-10 ">
      <FocusTrapRedirectFocus element={firstFocusableElement} />
      <div
        className="absolute left-0 right-0 w-full h-full bg-black bg-opacity-70 z-20 "
        onClick={handleCloseModal}
      ></div>
      {stats && (
        <div
          className={`flex flex-col w-full sm:max-w-[450px] p-8 text-xl bg-gray-900 border z-30 overflow-y-scroll ${
            itemQuality
              ? QUALITY_COLORS[itemQuality]?.border
              : "border-slate-700"
          } text-white z-50 text-sm animate-fadeIn`}
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <img src={image} width={60} height={60} alt={stats.name} />
            <button
              className="relative flex min-w-[25px] min-h-[25px] p-2"
              onClick={handleCloseModal}
              aria-label={"close item modal"}
              autoFocus
              ref={firstFocusableElement}
            >
              <AiOutlineClose style={{ width: 30, height: 30 }} />
            </button>
          </div>

          {!stats?.name && <p>No item.</p>}
          <p className={QUALITY_COLORS[itemQuality]?.text}>{stats?.name}</p>
          <p>{stats?.binding.name}</p>
          <div className="flex w-full justify-between">
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
                } ml-4 text-md`}
              >
                {item.item.name}
              </p>
            );
          })}
          <p>{stats?.durability?.display_string}</p>
          <p>{stats?.requirements?.level?.display_string}</p>
        </div>
      )}
      <FocusTrapRedirectFocus element={firstFocusableElement} />
    </div>
  );
};

export default ItemStatsModal;
