import { ReactElement } from "react";
import { RecipientLayout } from "../../components/layouts/recipient";
import { Heading, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import dynamic from "next/dynamic";

const CreateForm = dynamic(
  () => import("../../components/CreateForm").then((m) => m.CreateForm),
  {
    ssr: false,
  }
);

const CreatePage = () => {
  const { address } = useAccount();

  return (
    <>
      <Heading>How much do you want to donate?</Heading>
      <Text>
        The selection fraction will be deducted from incoming transactions
      </Text>
      <CreateForm recipientId={address!} />
    </>
  );
};

CreatePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default CreatePage;
