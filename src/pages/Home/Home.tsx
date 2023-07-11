import T10Y2YLineChart from "@/components/Charts/T10Y2YLineChart";
import { useGetObservations } from "@/hooks/data/fred/fredQueries.hooks";
import { Box } from "@/ui/Box";

const Home = () => {
  const { data } = useGetObservations({ series_id: "T10Y2Y" });

  console.log({ data });
  return (
    <div>
      <Box h="500px">
        {data && <T10Y2YLineChart observations={data.observations} />}
      </Box>
    </div>
  );
};

export default Home;
