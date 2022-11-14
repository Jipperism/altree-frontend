import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <Flex as="nav" justifyContent="center" py={4}>
      <Flex width={800}>
        <h2>Altr.ee</h2>
        <Flex ml="auto">
          <ConnectButton
            accountStatus="address"
            showBalance={false}
            chainStatus="none"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
