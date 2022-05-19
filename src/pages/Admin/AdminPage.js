import React, { useCallback, useRef } from "react";
import NftStaking from "../../contants/abi/NftStaking";
import { ADDRESSES } from "../../contants/addresses";
import { useAddress, useWeb3Context } from "../../hooks/web3/web3-context";

function AdminPage() {
  const { connect, connected, providerWrapper, address } = useWeb3Context();

  const collectionAddress = useRef(null);
  const rewardPerSecond = useRef(null);

  const setRewardPerSecond = useCallback(
    async (collection, _perSecond) => {
      try {
        const perSecond = providerWrapper.utils.convertToPeb(_perSecond);
        const contract = new providerWrapper.klay.Contract(
          NftStaking,
          ADDRESSES.STAKING
        );
        console.log(perSecond);
        const gas = await contract.methods
          .setCollection(collection, perSecond)
          .estimateGas({
            from: address,
          });
        const tx = await contract.methods
          .setCollection(collection, perSecond)
          .send({
            from: address,
            gas,
          });
      } catch (err) {}
    },
    [address, providerWrapper]
  );

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <div>AdminPage</div>

      {!connected && <span onClick={connect}>Connect</span>}
      <div>{address}</div>

      <div
        style={{
          margin: "auto",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          maxWidth: "800px",
        }}
      >
        <div
          style={{ marginTop: "200px", fontSize: "24px", fontWeight: "bold" }}
        >
          Adjust Collection RewardPerSecond
        </div>
        <div>Collection Address</div>
        <input style={{ height: "24px" }} ref={collectionAddress} />
        <div>Reward Per Second</div>
        <input style={{ height: "24px" }} ref={rewardPerSecond} />
        <button
          style={{ width: "240px", height: "40px" }}
          onClick={() => {
            setRewardPerSecond(
              collectionAddress.current.value,
              rewardPerSecond.current.value
            );
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
