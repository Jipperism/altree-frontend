import { Formik } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const CreateForm = ({ recipientId }: { recipientId: string }) => {
  const { push } = useRouter();
  return (
    <Formik
      initialValues={{
        beneficiaryId: "" as string | undefined,
        label: "" as string | undefined,
        fraction: 0.1,
      }}
      onSubmit={async ({ label, beneficiaryId, fraction }) => {
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
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                name="label"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.label}
              />
              <FormHelperText>Human readable identifier</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Beneficiary</FormLabel>
              <Input
                name="beneficiaryId"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.beneficiaryId}
              />
              <FormHelperText>Address of the beneficiary</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Fraction</FormLabel>
              <Input
                name="fraction"
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                value={values.fraction}
              />
              <FormHelperText>Fraction to be donated</FormHelperText>
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
      )}
    </Formik>
  );
};
