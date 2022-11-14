import { Flex } from "@chakra-ui/react";

export const RouteButton = ({ label }: { label: string; id: string }) => {
  return (
    <Flex
      backgroundColor="pink.200"
      p={4}
      width={400}
      borderRadius={20}
      cursor="pointer"
      _hover={{ backgroundColor: "pink.300" }}
    >
      {label}
    </Flex>
  );
};
