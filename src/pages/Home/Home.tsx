import GDPCABarChart from "@/components/Charts/GDPCABarChart";
import T10Y2YLineChart from "@/components/Charts/T10Y2YLineChart";
import { useGetObservations } from "@/hooks/data/fred/fredQueries.hooks";
import { Box } from "@/ui/Box";

const Home = () => {
  const { data: T10Y2YData } = useGetObservations({ series_id: "T10Y2Y" });
  const { data: GDPCAData } = useGetObservations({ series_id: "GDPCA" });

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
    </div>
  );
};

export default Home;
