import { ReactElement } from "react";
import { RecipientLayout } from "../../components/layouts/recipient";
import { useAccount } from "wagmi";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { ReleaseOverview } from "../../components/ReleaseOverview";
import { useReleasable } from "../../hooks/contract";
import { useRouter } from "next/router";

const ReleasePage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { query, isReady } = useRouter();

  if (isConnecting || !isReady) {
    return <Spinner />;
  }

  if (isDisconnected) {
    return <div>Please connect first</div>;
  }

  if (!address || !query) {
    return <div>No address found</div>;
  }
  return (
    <>
      <Heading>Release funds</Heading>
      <Text>Click release to withdraw your available funds from the donation cookie-jar</Text>
      <ReleaseOverview userId={address} routeId={query["routeId"] as string} />
    </>
  );
};

ReleasePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default ReleasePage;
