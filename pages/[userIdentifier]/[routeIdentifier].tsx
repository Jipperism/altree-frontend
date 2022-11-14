import { useRouter } from "next/router";
import { Button, Container, Input, Spinner } from "@chakra-ui/react";
import { RecipientLayout } from "../../components/layouts/recipient";
import { ReactElement } from "react";
import Head from "next/head";
import { UserOverviewPage } from "../../components/UserPage";
import { RoutePage } from "../../components/RoutePage";

const UserPage = (): JSX.Element => {
  const { query, isReady } = useRouter();
  const routeIdentifier = query?.["routeIdentifier"];

  if (!isReady) return <Spinner />;

  if (!routeIdentifier) return <div>No user specified</div>;

  if (Array.isArray(routeIdentifier)) {
    return <div>Multiple users specified</div>;
  }

  return (
    <Container>
      <Head>
        <title>{routeIdentifier} - Altr.ee</title>
      </Head>
      <RoutePage routeId={routeIdentifier} />
    </Container>
  );
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default UserPage;
