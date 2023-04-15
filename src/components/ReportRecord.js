import React from "react"

import { useNavigate } from 'react-router-dom';


export default function ReportRecord({report, mode}){
    const navigate = useNavigate()
    
    return (
        <tr>
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
