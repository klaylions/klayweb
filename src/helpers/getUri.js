import { ADDRESSES } from "../contants/addresses";

export const getUri = (nftAddress, id) => {
  switch (nftAddress) {
    case ADDRESSES.KLNFT:
      return `https://klaylions.s3.ap-northeast-2.amazonaws.com/image/${id}.png`;
      break;
    case ADDRESSES.KLAYLIONS:
      return `https://klaylions.s3.ap-northeast-2.amazonaws.com/image/${id}.png`;
      break;
    default:
      return `https://claimswap-slime-nft.s3.ap-northeast-2.amazonaws.com/image/2628.png`;
      break;
  }
};
