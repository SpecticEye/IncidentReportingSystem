import React from "react"

import { useNavigate } from 'react-router-dom';

import '../stylesheets/Dashboard.css';

export default function ReportRecord({handler, report, mode}){
    const navigate = useNavigate();
    
    return (
        <tr id = {report.id} className ="report-record" onClick={handler}>
            <td>{ report.id }</td>
            <td>{ report.title }</td>
            <td>{ report.buildingNr + ", " + report.roomNr }</td>
            <td>{ report.category }</td>
            <td>{ report.urgency }</td>
            <td>{ report.progress + "%" }</td>
            <td><button onClick={()=> navigate(`/Details/${report.id}` ,{state: {ID: report.id}})} className="secondary-button">View Report</button></td>
            { (mode.MANAGER == 0 || mode.MAINTENANCE == 0) &&
                        <td><button className="secondary-button">D</button></td>
            }
        </tr>
    )
}
