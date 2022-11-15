import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  Text,
  Link,
  Image,
  Stack,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const BeneficiaryItem = ({
  id,
  name,
  description,
  logoSrc,
  website,
  showDonateLink,
}: {
  id: string;
  name?: string | null;
  description?: string | null;
  logoSrc?: string | null;
  website?: string | null;
  showDonateLink?: boolean;
}) => {
  return (
    <Card direction="row" overflow="hidden" variant="outline" width="100%">
      {logoSrc && (
        <Image objectFit="cover" maxW="200px" src={logoSrc} alt="Caffe Latte" />
      )}
      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Text py="2">{description}</Text>
          {website && (
            <Link href="https://chakra-ui.com" isExternal>
              Visit website <ExternalLinkIcon mx="2px" />
            </Link>
          )}
        </CardBody>
        {showDonateLink && (
          <CardFooter>
            <Link href={`/create/${id}`}>
              <Button variant="solid" colorScheme="blue">
                Donate
              </Button>
            </Link>
          </CardFooter>
        )}
      </Stack>
    </Card>
  );
};
