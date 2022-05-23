export const ADDRESSES = {
  KLC: "0xe3002742D823381dcF6409Cf61aF7175857D9009",
  STAKING: "0x665c3FEa77bEF62760a38dec23a0249C1DdEEEa1",
  LOCKER: "0x5a394f3cC93649a745721cBC3aEc088F80e41c80",
  KLNFT: "0x77cFb2CfB22B32618AF9D0f0c6651E85D212DE41",
  KLAYLIONS: "0x77cFb2CfB22B32618AF9D0f0c6651E85D212DE41",
  KLNFTLEGENDARY: "0x4D68CfB8b5fa679876b38f3390FADc65cC5Ee76B",
  KLAYLIONSLEGENDARY: "0x4D68CfB8b5fa679876b38f3390FADc65cC5Ee76B",
};

export const getCollectionByPathname = () => {
  let tmp;
  try {
    tmp = window.location.pathname.split("/")[2];
  } catch (err) {}
  return ADDRESSES[tmp.toUpperCase()] || ADDRESSES.KLAYLIONS;
};
export const getCollectionNameByPathname = () => {
  let tmp;
  try {
    tmp = window.location.pathname.split("/")[2];
  } catch (err) {}
  return tmp.toUpperCase() || "KLAYLIONS";
};
