import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { Confirm } from "../components/Confirm";
import { ReactElement } from "react";
import { RecipientLayout } from "../components/layouts/recipient";

const ConfirmPage = () => {
  const { isReady, query } = useRouter();
  const { address } = useAccount();

  if (!isReady) {
    return <Spinner />;
  }

  if (!address) {
    return <div>Please connect first</div>;
  }

  const beneficiaryId = query["beneficiaryId"];
  if (typeof beneficiaryId !== "string") {
    return <div>Something went wrong</div>;
  }
  const label = query["label"];
  if (typeof label !== "string") {
    return <div>Something went wrong</div>;
  }
  const donationFraction = query["donationFraction"];
  if (typeof donationFraction !== "string") {
    return <div>Something went wrong</div>;
  }

  return (
    <Confirm
      recipientAddress={address}
      beneficiaryId={beneficiaryId}
      label={label}
      donationFraction={parseFloat(donationFraction)}
    />
  );
};

ConfirmPage.getLayout = function getLayout(page: ReactElement) {
  return <RecipientLayout>{page}</RecipientLayout>;
};

export default ConfirmPage;
