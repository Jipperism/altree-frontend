import {
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HStack w={"100%"}>
        <Heading>Altr.ee</Heading>
        <Spacer />
        <ConnectButton />
      </HStack>
      <VStack h={"100%"} alignContent={"center"}>
        <Heading>Welcome to Altr.ee</Heading>
        <Link href={`/create`}>
          <Button>Make your pledge</Button>
        </Link>
      </VStack>
    </div>
  );
};

export default Home;
