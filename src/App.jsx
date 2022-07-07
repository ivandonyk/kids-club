import "./App.css";
import { Button, Table } from "react-bootstrap";
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="px-4">
      <div className="d-flex justify-content-center container-xl">
        <div className="w-100">
          <div className="app-header">
            <h1>Data Analysis for Kids Club</h1>
            <p className="app-subtitle">Games played by: steve</p>
          </div>
          <div className="app-content">
            <div className="members__table-area">
              <Table className="members__table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Games Played</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="row__selected">
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="member-games__chart-area">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
