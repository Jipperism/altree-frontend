import {
  Address,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
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

export const useReleaseRoute = (routeId: string, recipientId: Address) => {
  const { config } = usePrepareContractWrite({
    address: routeId,
    abi: routeAbi,
    functionName: "release",
    args: [recipientId],
  });
  return useContractWrite(config);
};
