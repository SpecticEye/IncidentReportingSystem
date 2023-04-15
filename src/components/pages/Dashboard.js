import { Link } from "react-router-dom";

import '../../stylesheets/Dashboard.css';

function Dashboard() {
    
    const Mode = {
        REQUESTOR : 0,
        MANAGER : 1,
        MAINTENANCE : 2
    };

    return (
        <div>
            <div id="DashBar">
                <h1 id="DashHeader">Dashboard</h1>
                {
                (Mode.REQUESTOR == 0) && 
                <Link to={"/ReportIncident"}><button className="primary-button">New Report</button></Link>
                }
                {
                (Mode.MANAGER == 0) && (
                    <div> 
                        <button className="primary-button">Assign Report</button>
                        <button className="primary-button">Edit Report</button>
                        <button className="primary-button">Upload Instructions</button>
                    </div> )
                }
                {
                (Mode.MAINTENANCE == 0) && 
                <button className="primary-button">Edit Progress</button>
                }
                
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
                    { (Mode.MANAGER == 0 || Mode.MAINTENANCE == 0) &&
                        <td><button className="secondary-button">D</button></td>
                    }
                </tr>
            </table>
        </div>
    )
}

export default Dashboard;