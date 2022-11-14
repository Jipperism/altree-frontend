import {
  Address,
  useContractRead,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi";
import { BigNumber, ethers } from "ethers";
import { routeAbi } from "./abi";

export const useMakePayment = (routeId: string, value: number) => {
  const { config } = usePrepareSendTransaction({
    request: {
      to: routeId,
      value: BigNumber.from(ethers.utils.parseEther(value.toString())),
    },
  });
  return useSendTransaction(config);
};

export const useReleasable = (routeId: string, recipientId: Address) => {
  return useContractRead({
    address: routeId,
    abi: routeAbi,
    functionName: "releasable",
    args: [recipientId],
  });
};
