import { httpClient } from "@/lib/configs/axios";
import {
  useQuery,
  UseQueryOptions,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { TSeriesId } from "./fred.types";

export const fredQueryKeys = {
  all: [{ scope: "plots" }] as const,
  observations: ({ series_id }: { series_id: TSeriesId }) =>
    [{ ...fredQueryKeys.all[0], entity: "Observations", series_id }] as const,
  "DGS10-T10YIE": () =>
    [{ ...fredQueryKeys.all[0], entity: "DGS10-T10YIE" }] as const,
};

async function getObservations({
  queryKey: [{ series_id }],
}: QueryFunctionContext<ReturnType<(typeof fredQueryKeys)["observations"]>>) {
  const res = await httpClient.get("/series/observations", {
    params: { series_id },
  });

  return res.data;
}

interface IGetObservationsProps {
  series_id: TSeriesId;
}

export const useGetObservations = (
  { series_id }: IGetObservationsProps,
  options?: UseQueryOptions
) => {
  return useQuery(fredQueryKeys.observations({ series_id }), getObservations);
};
