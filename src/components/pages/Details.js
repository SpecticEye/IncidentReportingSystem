import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


import "../../stylesheets/Details.css";

function Details() {

    const { state } = useLocation();

    const [report, setReport ] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3001/reports/${state.ID}`)
        .then(res => res.json())
        .then(data => setReport(data))
    },[])

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
    labels: [],
    datasets: [
        {
        label: '(%):',
        data: [report.progress, Math.abs(100 - report.progress)],
        backgroundColor: [
            'rgba(255, 207, 114, 1)',
            'rgba(230, 230, 230, 1)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
        },
    ],
    };

  return (
    <div>
        <h1>{ report.title }</h1> 
        <p id="ReportID">ID: { report.id }</p>
        <div id="DetailsCont">
            <div className="details-wrapper">
                <table id="DetailsTable">
                    <tr>
                        <td><h2>Department:</h2></td>
                        <td><p>{ report.category }</p></td>
                    </tr>
                    <tr>
                        <td><h2>Location:</h2></td>
                        <td><p>{ report.buildingNr + ", Room " + report.roomNr} </p></td>
                    </tr>
                    <tr>
                        <td><h2>Description:</h2></td>
                        <td><p>{ report.description }</p></td>
                    </tr>
                </table>
                <h2>Images:</h2>
            </div>
            <div id="StatusCont">
                <h2>Status</h2>
                <div id="Charts">
                    <div id="UrgencyCircle">
                        <h3>{ report.urgency }</h3>
                    </div>
                    <div id="ProgCircle">
                        <Pie data={data} />
                    </div>
                </div>
                <h2>Instructions</h2>
                <p>{ report.instructions }</p>
            </div>
        </div>
        { (state.MODE == 0) &&
                <div className='rate-service-cont'><button type="submit" className="rate-service-button" disabled={!(report.progress == 100)}  >Rate Service</button></div>
            }
    </div>
  );
}

export default Details;
