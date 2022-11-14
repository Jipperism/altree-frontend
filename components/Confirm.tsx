import { useCreateRoute } from "../hooks/contract";
import { Button } from "@chakra-ui/react";

export const Confirm = ({
  recipientAddress,
  beneficiaryId,
  label,
  donationFraction,
}: {
  recipientAddress: string;
  beneficiaryId: string;
  label: string;
  donationFraction: number;
}) => {
  const { write } = useCreateRoute(
    recipientAddress,
    beneficiaryId,
    label,
    donationFraction
  );

  return (
    <>
      <h2>Please review and confirm the following info</h2>
      <div>
        <b>Recipient</b> {recipientAddress}
      </div>
      <div>
        <b>Label</b> {label}
      </div>
      <div>
        <b>Donation fraction</b> {donationFraction}
      </div>
      <Button colorScheme="green" onClick={() => write?.()}>
        Create
      </Button>
    </>
  );
};
