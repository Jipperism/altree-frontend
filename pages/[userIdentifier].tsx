import { useRouter } from "next/router";
import { Container, Spinner } from "@chakra-ui/react";
import { RecipientLayout } from "../components/layouts/recipient";
import { ReactElement } from "react";
import Head from "next/head";
import { UserOverviewPage } from "../components/UserPage";

const UserPage = (): JSX.Element => {
  const { query, isReady } = useRouter();
  const userIdentifier = query?.["userIdentifier"];

  if (!isReady) return <Spinner />;

  if (!userIdentifier) return <div>No user specified</div>;

  if (Array.isArray(userIdentifier)) {
    return <div>Multiple users specified</div>;
  }

  return (
    <Container>
      <Head>
        <title>{userIdentifier} - Altr.ee</title>
      </Head>
      <UserOverviewPage userIdentifier={userIdentifier} />
    </Container>
  );
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default UserPage;
