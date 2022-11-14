import { Formik } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export const CreateForm = ({ recipientId }: { recipientId: string }) => {
  const { push, query, isReady } = useRouter();

  if (!isReady) {
    return <Spinner />;
  }

  const beneficiaryId = query["beneficiaryId"] as string;

  if (!beneficiaryId || !ethers.utils.isAddress(beneficiaryId)) {
    return <div>Please provide a valid beneficiary address</div>;
  }

  if (!recipientId || !ethers.utils.isAddress(recipientId)) {
    return <div>Please provide a valid recipient address</div>;
  }

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <>
      <Formik
        initialValues={{
          label: "" as string | undefined,
          fraction: 10,
        }}
        onSubmit={async ({ label, fraction }) => {
          if (!recipientId || !beneficiaryId || !label || !fraction) {
            return;
          }

          await push({
            pathname: "/confirm",
            query: {
              recipientId,
              beneficiaryId,
              label,
              donationFraction: fraction,
            },
          });
        }}
      >
        {({
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => {
          const colorStep = Math.max(Math.ceil(values.fraction / 20), 0);
          const color = `green.${colorStep * 100}`;
          return (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Fraction</FormLabel>
                  <Slider
                    mt={8}
                    value={values.fraction}
                    name="fraction"
                    onChange={(e) => setFieldValue("fraction", e)}
                  >
                    <SliderMark value={25} {...labelStyles}>
                      25%
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                      50%
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                      75%
                    </SliderMark>
                    <SliderMark
                      value={values.fraction}
                      textAlign="center"
                      bg="green.600"
                      color="white"
                      mt="-10"
                      ml="-5"
                      w="12"
                    >
                      {values.fraction}%
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack bg={color} />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <FormHelperText mt={6}>Fraction to be donated</FormHelperText>
                </FormControl>
              </VStack>

              <Button
                colorScheme="green"
                type="submit"
                disabled={isSubmitting}
                mt={4}
              >
                Review
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
