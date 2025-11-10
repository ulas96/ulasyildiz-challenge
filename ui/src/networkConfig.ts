import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const PACKAGE_ID =
  "0xdc03c5f3ba202ecd979c45114e68992efc11e101b7c2a4ea95505300ff69ca32";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: { packageId: PACKAGE_ID },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: { packageId: PACKAGE_ID },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: { packageId: PACKAGE_ID },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
