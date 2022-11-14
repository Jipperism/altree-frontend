import { getBuiltGraphSDK } from "../.graphclient";
import { useQuery } from "@tanstack/react-query";

const sdk = getBuiltGraphSDK();

export const useGetRoutes = (userId: string) =>
  useQuery(["routes", userId], () =>
    sdk.GetRoutes({ userId: userId.toLowerCase() })
  );

export const useGetRoute = (routeId: string) =>
  useQuery(["route", routeId], () => sdk.GetRoute({ routeId }));
