import { BeneficiariesList } from "../../components/BeneficiariesList";
import { ReactElement } from "react";
import { RecipientLayout } from "../../components/layouts/recipient";
import { Heading } from "@chakra-ui/react";

const CreatePage = () => {
  return (
    <>
    <Heading>Select pledge recipient</Heading>
      <BeneficiariesList />
    </>
  );
};

CreatePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default CreatePage;
