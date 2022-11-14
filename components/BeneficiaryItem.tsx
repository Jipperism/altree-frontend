import { Avatar, Flex, VStack } from "@chakra-ui/react";

export const BeneficiaryItem = ({
  name,
  description,
  logoSrc,
  website,
}: {
  id: string;
  name?: string | null;
  description?: string | null;
  logoSrc?: string | null;
  website?: string | null;
}) => {
  return (
    <Flex border="1px solid red" width="100%" p={3} alignItems="center">
      <VStack alignItems="flex-start">
        <h5>{name}</h5>
        <p>{description}</p>
        {website && (
          <a href={website} target="_blank" rel="noreferrer noopener">
            {website}
          </a>
        )}
      </VStack>
      {logoSrc && <Avatar src={logoSrc} ml="auto" />}
    </Flex>
  );
};
