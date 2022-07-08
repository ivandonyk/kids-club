import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { fetchMemberGames } from "../api";

export default function GamesChart({ selectedMember }) {
  const [memberGames, setMemberGames] = useState([]);

  useEffect(() => {
    fetchMemberGames(selectedMember).then((data) => {
      setMemberGames(data);
    });
  }, [selectedMember]);

  return (
    <Chart
      chartType="PieChart"
      data={[["Member", "Games Played"], ...memberGames]}
      options={{
        chartArea: { left: 0, width: "90%" },
      }}
      width="100%"
      height="300px"
    />
  );
}
