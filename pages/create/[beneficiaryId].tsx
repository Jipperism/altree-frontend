import { ReactElement } from "react";
import { RecipientLayout } from "../../components/layouts/recipient";
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

  return <CreateForm recipientId={address!} />;
};

CreatePage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default CreatePage;
