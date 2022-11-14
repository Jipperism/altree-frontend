import {
  Address,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi";
import { BigNumber, ethers } from "ethers";
import { contractAbi, routeAbi } from "./abi";

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

export const useCreateRoute = (
  recipientId: string,
  beneficiaryId: string,
  label: string,
  donationFraction: number
) => {
  const { config } = usePrepareContractWrite({
    address: "0x53613AC1ea15D9a014dbA518B94C19D3DD9140b6",
    abi: contractAbi,
    functionName: "createRoute",
    args: [
      recipientId as Address,
      beneficiaryId as Address,
      label,
      BigNumber.from(donationFraction * 10000),
    ],
  });
  return useContractWrite(config);
};
