import { useGetRoute } from "../hooks/graph";
import {
  Button,
  ButtonGroup,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMakePayment } from "../hooks/contract";
import { useAccount } from "wagmi";
import Link from "next/link";

export const RoutePage = ({ routeId }: { routeId: string }) => {
  const { data, isLoading } = useGetRoute(routeId);
  const [amount, setAmount] = useState(0);

  const { address } = useAccount();

  const {
    data: paymentData,
    isLoading: paymentLoading,
    sendTransaction,
    isSuccess,
  } = useMakePayment(routeId, amount);

  if (isLoading) {
    return <Spinner />;
  }

  const onMakePayment = () => {
    console.log("Make payment", amount);
    sendTransaction?.();
  };

  return (
    <>
      <Heading>{data?.route?.name}</Heading>
      <Text>{`How much do you want to send?`}</Text>
      <Input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value ? parseFloat(e.target.value) : 0)
        }
      />
      <ButtonGroup>
        <Button onClick={onMakePayment}>Make payment</Button>
        {isSuccess && <div>Payment sent!</div>}
        {address?.toLowerCase() === data?.route?.user.id && (
          <Link href={`/release/${routeId}`}>
            <Button>Release overview</Button>
          </Link>
        )}
      </ButtonGroup>
    </>
  );
};
