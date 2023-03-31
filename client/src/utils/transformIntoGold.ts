const transfromIntoGold = (money: string) => {
  const copper = money.slice(money.length - 2, money.length);
  const silver = money.slice(money.length - 4, money.length - 2);
  const gold = money.slice(0, money.length - 4);
  return { gold, silver, copper };
};

export default transfromIntoGold;
