import Chart from "@/components/Charts/Chart";

import {
  useGetDGS10minusT10YIEObservations,
  useGetObservationsById,
} from "@/hooks/data/fred/fredQueries.hooks";
import { chartConfig } from "@/lib/constants/chartsConfig";
import { Box } from "@/ui/Box";
import { Text } from "@/ui/Text";

const Home = () => {
  const { data: T10Y2YData } = useGetObservationsById({ series_id: "T10Y2Y" });
  const { data: GDPCAData } = useGetObservationsById({ series_id: "GDPCA" });
  const { data: DGS10minusT10YIEData } = useGetDGS10minusT10YIEObservations();

  return (
    <div className="p-8">
      <div>
        <Text variant="displaySmall">
          10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant
          Maturity (T10Y2Y)
        </Text>
        <Box h="500px">
          {T10Y2YData && (
            <Chart options={chartConfig.T10Y2Y(T10Y2YData.observations)} />
          )}
        </Box>
      </div>
      <div>
        <Text variant="displaySmall">Real Gross Domestic Product (GDPCA)</Text>
        <Box p={4} className="shadow rounded-lg" my={10} h="500px">
          {GDPCAData && (
            <Chart options={chartConfig.GDPCA(GDPCAData.observations)} />
          )}
        </Box>
      </div>
      <Box h="500px">
        <Text variant="displaySmall">
          Market Yield on U.S. Treasury Securities at 10-Year Constant Maturity
          (DGS10) Minus 10-Year Breakeven Inflation Rate (T10YIE)
        </Text>
        {DGS10minusT10YIEData && (
          <Chart options={chartConfig.DGS10minusT10YIE(DGS10minusT10YIEData)} />
        )}
      </Box>
    </div>
  );
};

export default Home;
