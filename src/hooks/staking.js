import axios from "axios";
import { useCallback, useState } from "react";
import ERC721 from "../contants/abi/ERC721";
import NftStaking from "../contants/abi/NftStaking";
import { ADDRESSES } from "../contants/addresses";
import { useAddress, useWeb3Context } from "./web3/web3-context";

export const useStakingNft = () => {
  const { address, providerWrapper, provider } = useWeb3Context();
  const [walletNfts, setWalletNfts] = useState({}); // { tokenId: value }
  console.log(provider);

  const stake = useCallback(
    async (collection, tokenIds) => {
      const approved = await isApproved(collection);
      if (!approved) {
        await approveCollection(collection);
      } 
      const contract = new providerWrapper.klay.Contract(
        NftStaking,
        ADDRESSES.NFTStaking
      );
      const tx = await contract.methods.stake(collection, tokenIds).send({
        from: address,
      });
    },
    [address, providerWrapper]
  );
  const getWalletNft = useCallback(
    async (collection) => {
      console.log("in");
      const nftContract = new provider.klay.Contract(ERC721, collection);
      let incomingTokenTransferEvents = await nftContract
        .getPastEvents("Transfer", {
          filter: { to: address },
          fromBlock: "64117112",
          toBlock: "latest",
        })
        .then((res) => res.map((e) => e.returnValues.tokenId));
      console.log("out");
      const ownedNft = incomingTokenTransferEvents.map((id) => {
        return Promise.all([
          nftContract.methods.ownerOf(id).call(),
          nftContract.methods.tokenURI(id).call(),
        ]);
      });
      console.log(ownedNft);
      let ids = [];
      let initUris = [];
      await Promise.all(ownedNft).then(async (res) => {
        res.forEach((r, key) => {
          if (r[0].toLowerCase() === address.toLowerCase()) {
            if (ids.includes(incomingTokenTransferEvents[key])) {
              return;
            }

            ids.push(incomingTokenTransferEvents[key]);
            const uri = r[1].startsWith("https://")
              ? r[1]
              : r[1].startsWith(`https://ipfs`)
              ? r[1]
              : `https://ipfs.io/ipfs/${r[1].slice(7)}`;
            // initUris.push(uri);
            initUris.push(
              `https://klaylions.s3.ap-northeast-2.amazonaws.com/image/${incomingTokenTransferEvents[key]}.png`
            );
          }
        });
      });
      console.log(initUris);
      const uris = await Promise.all(
        initUris.map((uri) => {
          //   return axios
          //     .get(uri)
          //     .then((res) => res.data)
          //     .catch((res) => 0);
          return { image: uri };
        })
      );
      return {
        ids,
        uris,
      };
    },
    [address, provider, providerWrapper]
  );
  const getStakedNft = useCallback(
    async (collection) => {
      const stakingContract = new provider.klay.Contract(
        NftStaking,
        ADDRESSES.STAKING
      );
      return await stakingContract.tokensOfOwner(address, collection);
    },
    [address, provider, providerWrapper]
  );
  const isApproved = useCallback(
    async (collection) => {
      const nftContract = new provider.klay.Contract(ERC721, collection);
      return await nftContract.isApprovedForAll(address, ADDRESSES.STAKING);
    },
    [address, provider, providerWrapper]
  );
  const approveCollection = useCallback(
    async (collection) => {
      const nftContract = new provider.klay.Contract(ERC721, collection);
      await nftContract.setApprovalForAll(ADDRESSES.STAKING, true);
    },
    [address, provider, providerWrapper]
  );

  return {
    stake,
    getWalletNft,
    getStakedNft,

    isApproved,
    approveCollection,
  };
};
