export const shortenAddress = (address) => {
  if (address.length > 20) {
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4
    )}`;
  }
  return address;
};
