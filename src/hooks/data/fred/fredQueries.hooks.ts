import { httpClient } from "@/lib/configs/axios";
import {
  useQuery,
  UseQueryOptions,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { IObservationsResponse, TSeriesId } from "./fred.types";

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
  const dataSource = {
    T10Y2Y: "data.json",
    GDPCA: "GDPCA.json",
  };
  const res = await httpClient.get<IObservationsResponse>(
    dataSource[series_id],
    {
      params: { series_id },
    }
  );
  // const res = await httpClient.get("/series/observations", {
  //   params: { series_id },
  // });

  return res.data;
}

interface IGetObservationsProps {
  series_id: TSeriesId;
}

export const useGetObservations = <
  SelectData = IObservationsResponse,
  Error = unknown
>(
  { series_id }: IGetObservationsProps,
  options?: UseQueryOptions<
    IObservationsResponse,
    Error,
    SelectData,
    ReturnType<(typeof fredQueryKeys)["observations"]>
  >
) => {
  return useQuery<
    IObservationsResponse,
    Error,
    SelectData,
    ReturnType<(typeof fredQueryKeys)["observations"]>
  >(fredQueryKeys.observations({ series_id }), getObservations, options);
};
