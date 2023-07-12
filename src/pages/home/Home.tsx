import Chart from "@/components/Charts/Chart";
import SeriesDisplay from "@/components/SeriesContainer/SeriesDisplay";

import {
  useGetDGS10minusT10YIEObservations,
  useGetObservationsById,
} from "@/hooks/data/fred/fredQueries.hooks";
import { chartConfig } from "@/lib/constants/chartsConfig";
import { Box } from "@/ui/Box";
import { Text } from "@/ui/Text";

const Home = () => {
  const { data: T10Y2YData, isLoading: T10Y2YLoading } = useGetObservationsById(
    { series_id: "T10Y2Y" }
  );
  const { data: GDPCAData, isLoading: GDPCALoading } = useGetObservationsById({
    series_id: "GDPCA",
  });
  const { data: DGS10minusT10YIEData, isLoading: DGS10minusT10YIELoading } =
    useGetDGS10minusT10YIEObservations();

  return (
    <div className="max-w-[1366px] container mx-auto">
      <div className="p-8 grid grid-cols-1 gap-8">
        <div>
          <SeriesDisplay
            isLoading={T10Y2YLoading}
            series={T10Y2YData}
            title=" 10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant
          Maturity (T10Y2Y)"
          >
            {(data) => (
              <Box p={4} className="shadow rounded-lg" my={10} h="500px">
                <Chart options={chartConfig.T10Y2Y(data)} />
              </Box>
            )}
          </SeriesDisplay>
        </div>
        <div>
          <SeriesDisplay
            isLoading={GDPCALoading}
            series={GDPCAData}
            title="Real Gross Domestic Product (GDPCA)"
          >
            {(data) => (
              <Box p={4} className="shadow rounded-lg" my={10} h="500px">
                <Chart options={chartConfig.GDPCA(data)} />
              </Box>
            )}
          </SeriesDisplay>
        </div>
        <Box h="500px">
          <Text variant="displaySmall"></Text>
          <SeriesDisplay
            isLoading={DGS10minusT10YIELoading}
            series={DGS10minusT10YIEData}
            title="Market Yield on U.S. Treasury Securities at 10-Year Constant Maturity
          (DGS10) Minus 10-Year Breakeven Inflation Rate (T10YIE)"
          >
            {(data) => (
              <Box p={4} className="shadow rounded-lg" my={10} h="500px">
                <Chart options={chartConfig.DGS10minusT10YIE(data)} />
              </Box>
            )}
          </SeriesDisplay>
        </Box>
      </div>
    </div>
  );
};

export default Home;
