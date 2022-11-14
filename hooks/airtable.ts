import Airtable from "airtable";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash/fp";

interface AirtableBeneficiaryEntry {
  Name: string;
  Address: string;
  Description: string;
  Website: string;
  Logo: string;
  [key: string]: string | undefined;
}

Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);

const table = base<AirtableBeneficiaryEntry>(
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME as string
);

export const useAirtableBeneficiaryData = () => {
  return useQuery(["airtable", "beneficiaries"], () =>
    table
      .select({})
      .firstPage()
      .then((res) =>
        _.keyBy(
          (x) => x.Address.toLowerCase(),
          res.filter((x) => !!x.fields.Address).map((x) => x.fields)
        )
      )
  );
};
