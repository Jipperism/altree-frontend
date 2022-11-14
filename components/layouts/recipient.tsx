import { PropsWithChildren } from "react";
import { Container } from "@chakra-ui/react";
import { Header } from "../Header";

export const RecipientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
