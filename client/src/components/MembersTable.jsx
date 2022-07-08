import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchMembers } from "../api";

const MembersTable = ({ selectedMember, setSelectedMember }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers().then((data) => {
      setMembers(data);
      setSelectedMember(data[0].name);
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
        {members.map((member) => (
          <tr
            key={member.name}
            onClick={() => setSelectedMember(member.name)}
            className={member.name === selectedMember ? "row__selected" : ""}
          >
            <td>{member.name}</td>
            <td>{member.gamesCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MembersTable;
