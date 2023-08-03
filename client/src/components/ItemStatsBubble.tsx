import { EquippedItemsEntity } from '../interfaces/CharacterEquipment';
import { QUALITY_COLORS } from './ItemSlot';

const ItemStatsBubble = ({ stats, isWeapon, statsPos }: { stats: EquippedItemsEntity | undefined; isWeapon: boolean | undefined; statsPos: 'left' | 'right' }) => {
  const itemQuality = stats?.quality.name as keyof typeof QUALITY_COLORS;
  const showStatsToTop = '-top-[8px] translate-y-[-100%]';
  const showStatsToLeft = 'right-0 translate-x-[-55px]';
  const showStatsToRight = 'left-0 translate-x-[55px]';
  return (
    <div
      className={`absolute flex flex-col top-0 items-start w-max min-w-[220px] max-w-[300px] p-2 bg-gray-900 border ${
        itemQuality ? QUALITY_COLORS[itemQuality]?.border : 'border-slate-700'
      } text-white z-[1] text-sm animate-fadeIn ${isWeapon ? showStatsToTop : statsPos === 'left' ? showStatsToLeft : showStatsToRight}`}
    >
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
        return <p className={`${item.is_equipped ? 'text-white' : 'text-gray-500'} ml-2 text-xs`}>{item.item.name}</p>;
      })}
      <p>{stats?.durability?.display_string}</p>
      <p>{stats?.requirements?.level?.display_string}</p>
    </div>
  );
};

export default ItemStatsBubble;
