import { useGetObservations } from "@/hooks/data/fred/fredQueries.hooks";
import { Button } from "@/ui/Button";
import { Text } from "@/ui/Text";

const Home = () => {
  const { data } = useGetObservations({ series_id: "T10Y2Y" });

  console.log({ data });
  return (
    <div>
      <Text variant="displayLarge">Hello</Text>
      <Button>Hello</Button>
    </div>
  );
};

export default Home;
