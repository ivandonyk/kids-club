import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchGames } from "../api";

const GamesTable = ({ selectedMember, setSelectedMember }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then((data) => {
      setGames(data);
      setSelectedMember(data[0].member);
    });
  }, [setSelectedMember]);

  return (
    <Table className="members__table">
      <thead>
        <tr>
          <th>Member</th>
          <th>Games Played</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr
            key={game.member}
            onClick={() => setSelectedMember(game.member)}
            className={game.member === selectedMember ? "row__selected" : ""}
          >
            <td>{game.member}</td>
            <td>{game.count}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GamesTable;
