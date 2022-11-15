import { useAirtableBeneficiaryData } from "../hooks/airtable";
import { Box, Spinner, VStack } from "@chakra-ui/react";
import { useGetBeneficiaries } from "../hooks/graph";
import { BeneficiaryItem } from "./BeneficiaryItem";
import Link from "next/link";

export const BeneficiariesList = () => {
  const { data: graphData, isLoading: isLoadingGraph } = useGetBeneficiaries();
  const { data: airtableData, isLoading: isLoadingAirtable } =
    useAirtableBeneficiaryData();

  if (isLoadingAirtable || isLoadingGraph) {
    return <Spinner />;
  }

  if (!graphData || !airtableData) {
    return <div>Data not found</div>;
  }
  return (
    <VStack spacing={3} width="100%">
      {graphData.beneficiaries.map((beneficiary) => {
        const airtableEntry = airtableData[beneficiary.id];

        return (
          <BeneficiaryItem
            key={beneficiary.id}
            id={beneficiary.id}
            name={airtableEntry?.Name}
            description={airtableEntry?.Description}
            logoSrc={airtableEntry?.Logo}
            website={airtableEntry?.Website}
            showDonateLink
          />
        );
      })}
    </VStack>
  );
};
