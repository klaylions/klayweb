import axios from "axios";
import { useCallback, useState } from "react";
import ERC721 from "../contants/abi/ERC721";
import Locker from "../contants/abi/Locker";
import NftStaking from "../contants/abi/NftStaking";
import { ADDRESSES } from "../contants/addresses";
import { getUri } from "../helpers/getUri";
import { useRefresh } from "./refresh";
import { useAddress, useWeb3Context } from "./web3/web3-context";

export const useStakingNft = () => {
  const { address, providerWrapper, provider } = useWeb3Context();
  const { refresh, update } = useRefresh();
  const [walletNfts, setWalletNfts] = useState({}); // { tokenId: value }
  const stake = useCallback(
    async (collection, tokenIds) => {
      const approved = await isApproved(collection);
      console.log(approved, "approved ?");
      if (!approved) {
        console.log("it's  not approved");
        await approveCollection(collection);
      }
      const contract = new providerWrapper.klay.Contract(
        NftStaking,
        ADDRESSES.STAKING
      );
      console.log(ADDRESSES.STAKING, collection, tokenIds);
      const gas = await contract.methods
        .stake(collection, tokenIds)
        .estimateGas({
          from: address,
        });
      const tx = await contract.methods.stake(collection, tokenIds).send({
        from: address,
        gas,
      });
      update();
    },
    [address, providerWrapper]
  );

  const unstake = useCallback(
    async (collection, tokenIds) => {
      const contract = new providerWrapper.klay.Contract(
        NftStaking,
        ADDRESSES.STAKING
      );
      try {
        const gas = await contract.methods
          .unstake(address, collection, tokenIds)
          .estimateGas({
            from: address,
          });
        const tx = await contract.methods
          .unstake(address, collection, tokenIds)
          .send({
            from: address,
            gas,
          });
        update();
      } catch (err) {
        console.log(err);
      }
    },
    [address, providerWrapper]
  );
  const unlock = useCallback(
    async (collection) => {
      const contract = new providerWrapper.klay.Contract(
        Locker,
        ADDRESSES.LOCKER
      );
      try {
        const gas = await contract.methods.unlock(collection).estimateGas({
          from: address,
        });
        const tx = await contract.methods.unlock(collection).send({
          from: address,
          gas,
        });
        update();
      } catch (err) {
        console.log(err);
      }
    },
    [address, providerWrapper]
  );

  const claim = useCallback(
    async (collection, tokenIds) => {
      const contract = new providerWrapper.klay.Contract(
        NftStaking,
        ADDRESSES.STAKING
      );
      console.log(collection, tokenIds);
      const gas = await contract.methods
        .claim(collection, tokenIds)
        .estimateGas({
          from: address,
        });
      const tx = await contract.methods.claim(collection, tokenIds).send({
        from: address,
        gas,
      });
      update();
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
            initUris.push(getUri(collection, incomingTokenTransferEvents[key]));
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
      const stakingContract = new providerWrapper.klay.Contract(
        NftStaking,
        ADDRESSES.STAKING
      );
      console.log("hi");
      await stakingContract.methods
        .rewardPerSecondStored(collection)
        .call()
        .then(console.log);
      await stakingContract.methods
        .rewardPerSecond(collection)
        .call()
        .then(console.log);
      console.log("h2");
      const nftContract = new provider.klay.Contract(ERC721, collection);
      let incomingTokenTransferEvents = await nftContract
        .getPastEvents("Transfer", {
          filter: { from: address, to: ADDRESSES.STAKING },
          fromBlock: "64117112",
          toBlock: "latest",
        })
        .then((res) => res.map((e) => e.returnValues.tokenId));
      console.log("out");
      const ownedNft = incomingTokenTransferEvents.map((id) => {
        console.log(id);
        return Promise.all([
          nftContract.methods.ownerOf(id).call(),
          nftContract.methods.tokenURI(id).call(),
          stakingContract.methods
            .earned(collection, [id])
            .call()
            .then((res) => res / 1e18),
        ]);
      });
      let ids = [];
      let initUris = [];
      let earned = [];
      await Promise.all(ownedNft).then(async (res) => {
        res.forEach((r, key) => {
          if (r[0].toLowerCase() === ADDRESSES.STAKING.toLowerCase()) {
            if (ids.includes(incomingTokenTransferEvents[key])) {
              return;
            }

            ids.push(incomingTokenTransferEvents[key]);
            earned.push(r[2]);

            const uri = r[1].startsWith("https://")
              ? r[1]
              : r[1].startsWith(`https://ipfs`)
              ? r[1]
              : `https://ipfs.io/ipfs/${r[1].slice(7)}`;
            // initUris.push(uri);
            initUris.push(getUri(collection, incomingTokenTransferEvents[key]));
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
        earned,
      };
    },
    [address, provider, providerWrapper]
  );
  const getLockedNft = useCallback(
    async (collection) => {
      const lockerContract = new providerWrapper.klay.Contract(
        Locker,
        ADDRESSES.LOCKER
      );
      const unlockable = await lockerContract.methods
        .unlockableNft(address, collection)
        .call();
      console.log("unlockable", unlockable);
      return unlockable;
    },
    [address, provider, providerWrapper]
  );

  const isApproved = useCallback(
    async (collection) => {
      const nftContract = new provider.klay.Contract(ERC721, collection);
      return await nftContract.methods
        .isApprovedForAll(address, ADDRESSES.STAKING)
        .call();
    },
    [address, provider, providerWrapper]
  );
  const approveCollection = useCallback(
    async (collection) => {
      const nftContract = new providerWrapper.klay.Contract(ERC721, collection);
      const gas = await nftContract.methods
        .setApprovalForAll(ADDRESSES.STAKING, true)
        .estimateGas({
          from: address,
        });
      await nftContract.methods
        .setApprovalForAll(ADDRESSES.STAKING, true)
        .send({
          from: address,
          gas,
        });
    },
    [address, provider, providerWrapper]
  );

  return {
    stake,
    unstake,
    getWalletNft,
    getStakedNft,
    refresh,
    isApproved,
    approveCollection,
    claim,
    unlock,
    getLockedNft,
  };
};
