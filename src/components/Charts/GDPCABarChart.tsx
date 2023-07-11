import { IObservation } from "@/hooks/data/fred/fred.types";
import { useMemo } from "react";
import Chart from "./Chart";
import type { EChartsOption } from "echarts";

interface IProps {
  observations: IObservation[];
}

const GDPCABarChart = ({ observations }: IProps) => {
  const options: EChartsOption = useMemo(() => {
    return {
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "7%",
        bottom: "3%",
        // top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "time",
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        boundaryGap: false,
      },
      dataZoom: [
        {
          type: "inside",
          // start: 0,
          // end: 100,
        },
        { type: "slider" },
      ],

      series: [
        {
          data: observations.map((s) => [+new Date(s["date"]), +s["value"]]),
          type: "bar",
          // symbol: "none",
          // areaStyle: {},
          // smooth: true,
          // markPoint: {
          //   data: [
          //     { type: "max", name: "Max" },
          //     { type: "min", name: "Min" },
          //   ],
          // },
        },
      ],
    };
  }, [observations]);
  return (
    <div style={{ height: "100%" }}>
      <Chart options={options} />
    </div>
  );
};

export default GDPCABarChart;
