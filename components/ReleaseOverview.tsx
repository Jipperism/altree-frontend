import { useReleasable } from "../hooks/contract";
import { Address } from "wagmi";
import { Spinner } from "@chakra-ui/react";
import { formatEther } from "ethers/lib/utils";

export const ReleaseOverview = ({
  routeId,
  userId,
}: {
  routeId: string;
  userId: string;
}) => {
  const { data, isLoading, isError, error } = useReleasable(
    routeId,
    userId as Address
  );

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return <div>{data ? formatEther(data) : "unknown"}</div>;
};
