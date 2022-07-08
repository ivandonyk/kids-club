import React, { useState } from "react";
import MembersTable from "./components/MembersTable";
import GamesChart from "./components/GamesChart";
import "./App.css";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="px-4">
      <div className="d-flex justify-content-center container-xl">
        <div className="w-100">
          <div className="app-header">
            <h1>Data Analysis for Kids Club</h1>
            <p className="app-subtitle">Games played by: {selectedMember}</p>
          </div>
          <div className="app-content">
            <div className="members__table-area">
              <MembersTable
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
              />
            </div>
            <div className="member-games__chart-area">
              <GamesChart selectedMember={selectedMember} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
