import React from "react";
import { Chart } from "react-google-charts";

export default function GamesChart({ selectedMember }) {
  return (
    <Chart
      chartType="PieChart"
      data={[
        ["Member", "Games Played"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]}
      options={{
        chartArea: { left: 0, width: "90%" },
      }}
      width={"100%"}
      height={"300px"}
    />
  );
}
