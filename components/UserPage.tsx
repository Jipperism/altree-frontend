import { ethers } from "ethers";
import { useEnsAddress } from "wagmi";
import { Spinner, VStack } from "@chakra-ui/react";
import { RouteButton } from "./RouteButton";
import Link from "next/link";

export const UserOverviewPage = ({
  userIdentifier,
}: {
  userIdentifier: string;
}) => {
  if (!ethers.utils.isAddress(userIdentifier)) {
  }

  const isEns = !ethers.utils.isAddress(userIdentifier);

  const { data, error, isLoading } = useEnsAddress({
    name: isEns ? userIdentifier : undefined,
  });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  console.log(data);
  const userAddress = isEns ? data : userIdentifier;

  if (!userAddress) {
    return <div>Address not found</div>;
  }

  return (
    <>
      <div>
        {userIdentifier}
        {"'"}s altree {userAddress}
      </div>
      <VStack>
        {availableRoutes.map((route) => (
          <Link key={route.id} href={`/${userIdentifier}/${route.id}`} passHref>
            <a>
              <RouteButton label={route.label} id={route.id} />
            </a>
          </Link>
        ))}
      </VStack>
    </>
  );
};

const availableRoutes: {
  id: string;
  label: string;
  beneficiary: { label: string; address: string };
}[] = [
  {
    id: "a",
    label: "first test route label",
    beneficiary: {
      label: "first beneficiary label",
      address: "aaa",
    },
  },
  {
    id: "b",
    label: "second test route label",
    beneficiary: {
      label: "second beneficiary label",
      address: "bbb",
    },
  },
];
