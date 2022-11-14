import { ReactElement } from "react";
import { RecipientLayout } from "../components/layouts/recipient";

const CreatePage = () => {
  return <div>Create page</div>;
};

CreatePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default CreatePage;
