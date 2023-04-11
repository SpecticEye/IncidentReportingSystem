import '../../Dashboard.css';

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
        <div id="DashBar">
            <h1 id="DashHeader">Dashboard</h1>
            <button className="primary-button">New Report</button>
        </div>
        <table id="Reports">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Location</th>
                <th>Department</th>
                <th>Urgency</th>
                <th>Progress</th>
                <th> </th>
            </tr>
            <tr>
                <td>292 008</td>
                <td>Defective faucet in M9 toilet</td>
                <td>Men’s College M9</td>
                <td>Water</td>
                <td>3</td>
                <td>10%</td>
                <td><Link to="/Details"><button className="secondary-button">View Report</button></Link></td>
            </tr>
            <tr>
                <td>292 008</td>
                <td>Defective faucet in M9 toilet</td>
                <td>Men’s College M9</td>
                <td>Water</td>
                <td>3</td>
                <td>10%</td>
                <td><button className="secondary-button">View Report</button></td>
            </tr>
            <tr>
                <td>292 008</td>
                <td>Defective faucet in M9 toilet</td>
                <td>Men’s College M9</td>
                <td>Water</td>
                <td>3</td>
                <td>10%</td>
                <td><button className="secondary-button">View Report</button></td>
            </tr>
        </table>
    </div>
  );
}

export default Dashboard;