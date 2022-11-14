import { BeneficiariesList } from "../../components/BeneficiariesList";
import { ReactElement } from "react";
import { RecipientLayout } from "../../components/layouts/recipient";

const CreatePage = () => {
  return <BeneficiariesList />;
};

CreatePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default CreatePage;
