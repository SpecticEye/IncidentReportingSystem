import {useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import ReportRecord from '../ReportRecord';

import '../../stylesheets/Dashboard.css';

function Dashboard() {

    const [reports, setReports ] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/reports")
        .then(res => res.json())
        .then(data => setReports(data))
    },[])
    

    
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
                { reports.map((report)=>(
                    <ReportRecord report = {report} mode = {Mode}/>
                ))}
            </table>
        </div>
    )
}

export default Dashboard;