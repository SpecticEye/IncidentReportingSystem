import {useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom';
import ReportRecord from '../ReportRecord';
import AssignReport from '../forms/AssignReport';
import EditStatus from '../forms/EditStatus';
import InstructionsForm from '../forms/InstructionsForm';


import '../../stylesheets/Dashboard.css';


function Dashboard() {

    const [isActiveRecord, setIsActiveRecord] = useState(false);
    const [activeRecordElem, setActiveRecordElem] = useState(false);
    const [activeRecord, setActiveRecord] = useState(false);

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
                                : (MODE == Mode.MANAGER) ? "http://localhost:3001/reports?category=Plumbing"
                                : "http://localhost:3001/reports?category=Plumbing&team=1";
                                console.log(link);
                    
        fetch(link)
        .then(res => res.json())
        .then(data => setReports(data))
    },[])

    const handleRecord = (e) => {
        e.preventDefault();
        if (MODE != Mode.REQUESTOR)
        {
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
            setActiveRecord(e.target.parentElement.id);
            e.target.parentElement.classList.toggle("record-toggle");
            setActiveRecordElem(e.target.parentElement);

        }
    }

    function handleFormToggler(i) {
        //console.log("called");
        var elem;
        switch(i) {
            case 0: elem =  document.getElementById("assignReport");
                break;
            case 1: elem = document.getElementById("editStatus");
                break;
            case 2: elem = document.getElementById("uploadInstructions");
                break;
            default: elem = null;
        }
       if (elem != null)
        elem.classList.toggle("s-report-form-toggler");

        //console.log(elem);
    }
    

    return (
        <div>
            <div id="DashBar">
                <h1 id="DashHeader">{(MODE == Mode.REQUESTOR) ? "Dashboard" : ((MODE == Mode.MANAGER) ? "Manager" : "Team 1")}</h1>
                {
                (MODE == Mode.REQUESTOR) && 
                <Link to={"/ReportIncident"}><button className="primary-button">New Report</button></Link>
                }
                {
                (MODE == Mode.MANAGER) && (
                    <div> 
                        <button disabled={!isActiveRecord} onClick={()=> handleFormToggler(0)} className="primary-button">Assign Report</button>
                        <button disabled={!isActiveRecord} onClick={()=> handleFormToggler(1)} className="primary-button">Edit Report</button>
                        <button disabled={!isActiveRecord} onClick={()=> handleFormToggler(2)} className="primary-button">Upload Instructions</button>
                    </div> )
                }
                {
                (MODE == Mode.MAINTENANCE) && 
                <button disabled={!isActiveRecord} onClick={()=> handleFormToggler(1)} className="primary-button">Edit Progress</button>
                }
                
            </div>
            <table id="Reports">
                <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Location</th>
                    <th>Department</th>
                    <th>Urgency</th>
                    <th>Progress</th>
                    <th> </th>
                </tr>
                
                { reports.map((report)=>(
                    <ReportRecord className = "report-record" handler = {handleRecord} key = {report.id} report = {report} mode = {MODE}/>
                ))}
                
            </table>
            <AssignReport id = {activeRecord}/>
            <EditStatus id = {activeRecord} mode = {MODE}/>
            <InstructionsForm id = {activeRecord}/>
        </div>
    )
}

export default Dashboard;