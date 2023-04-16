import {useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ReportRecord from '../ReportRecord';

import '../../stylesheets/Dashboard.css';

function Dashboard() {

    const [isActiveRecord, setIsActiveRecord] = useState(false);
    const [activeRecordElem, setActiveRecordElem] = useState(false);
    var activeRecord = null;

    const Mode = {
        REQUESTOR : 0,
        MANAGER : 1,
        MAINTENANCE : 2
    };

    const { state } = useLocation();
    const MODE =  (state) ? state.MODE : 0;

    const [reports, setReports ] = useState([])

    useEffect(()=>{
        const link = (MODE == Mode.REQUESTOR) ? "http://localhost:3001/reports"
                                : "http://localhost:3001/reports?category=Electrical"
        fetch(link)
        .then(res => res.json())
        .then(data => setReports(data))
    },[])

    const handleRecord = (e) => {
        e.preventDefault();
        if (MODE != Mode.REQUESTOR)
        {
            activeRecord = e.target.parentElement.id;

            //console.log("isActive? "+ isActiveRecord + " activeRecordElem? " + ( activeRecordElem !== null ), "comparison? " + ((activeRecordElem != null) ? (activeRecordElem.id != e.target.parentElement.id ): "no elem"));
            //console.log(activeRecordElem);

            if (isActiveRecord && activeRecordElem !== null && activeRecordElem.id != e.target.parentElement.id)
            {
                activeRecordElem.classList.toggle("record-toggle");
            }
            else 
            {
                setIsActiveRecord(!isActiveRecord);
            }

            e.target.parentElement.classList.toggle("record-toggle");
            setActiveRecordElem(e.target.parentElement);

        }
    }

    return (
        <div>
            <div id="DashBar">
                <h1 id="DashHeader">Dashboard</h1>
                {
                (MODE == Mode.REQUESTOR) && 
                <Link to={"/ReportIncident"}><button className="primary-button">New Report</button></Link>
                }
                {
                (MODE == Mode.MANAGER) && (
                    <div> 
                        <button disabled={!isActiveRecord} className="primary-button">Assign Report</button>
                        <button disabled={!isActiveRecord} className="primary-button">Edit Report</button>
                        <button disabled={!isActiveRecord} className="primary-button">Upload Instructions</button>
                    </div> )
                }
                {
                (MODE == Mode.MAINTENANCE) && 
                <button disabled={!isActiveRecord} className="primary-button">Edit Progress</button>
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
                    <ReportRecord className = "report-record" handler = {handleRecord} key = {report.id} report = {report} mode = {Mode}/>
                ))}
                
            </table>
        </div>
    )
}

export default Dashboard;