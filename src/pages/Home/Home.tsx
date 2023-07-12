import GDPCABarChart from "@/components/Charts/GDPCABarChart";
import T10Y2YLineChart from "@/components/Charts/T10Y2YLineChart";
import {
  useGetDGS10minusT10YIEObservations,
  useGetObservationsById,
} from "@/hooks/data/fred/fredQueries.hooks";
import { Box } from "@/ui/Box";

const Home = () => {
  const { data: T10Y2YData } = useGetObservationsById({ series_id: "T10Y2Y" });
  const { data: GDPCAData } = useGetObservationsById({ series_id: "GDPCA" });
  const { data: DGS10minusT10YIEData } = useGetDGS10minusT10YIEObservations();

  console.log({ DGS10minusT10YIEData });
  return (
    <div>
      <Box h="500px">
        {T10Y2YData && (
          <T10Y2YLineChart observations={T10Y2YData.observations} />
        )}
      </Box>
      <Box my={10} h="500px">
        {GDPCAData && <GDPCABarChart observations={GDPCAData.observations} />}
      </Box>
      <Box h="500px">
        {DGS10minusT10YIEData && (
          <T10Y2YLineChart observations={DGS10minusT10YIEData} />
        )}
      </Box>
    </div>
  );
};

export default Home;
