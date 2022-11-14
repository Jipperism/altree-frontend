import { ethers } from "ethers";
import { useEnsAddress } from "wagmi";
import { SlideFade, Spinner, VStack, Heading, Text, Spacer } from "@chakra-ui/react";
import { RouteButton } from "./RouteButton";
import Link from "next/link";
import { useGetRoutes } from "../hooks/graph";

export const UserOverviewPage = ({
  userIdentifier,
}: {
  userIdentifier: string;
}) => {
  const isEns = !ethers.utils.isAddress(userIdentifier);

  const { data, error, isLoading } = useEnsAddress({
    name: isEns ? userIdentifier : undefined,
  });

  const userAddress = isEns ? data : userIdentifier;
  const { data: routes } = useGetRoutes(userAddress as string);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  if (!userAddress) {
    return <div>Address not found</div>;
  }

  return (
    <>
      <VStack>
        <Heading>Who do you want to support?</Heading>
        <Spacer />
        {routes?.routes.map((route) => (
          <Link key={route.id} href={`/${userIdentifier}/${route.id}`} passHref>
            <a>
              <RouteButton label={route.name} id={route.id} />
            </a>
          </Link>
        ))}
      </VStack>
    </>
  );
};
