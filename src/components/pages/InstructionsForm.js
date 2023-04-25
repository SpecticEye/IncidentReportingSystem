import { useLocation } from 'react-router-dom'
import '../../stylesheets/Report-Form.css'
import getReport from '../../utility/getReport';
import { useState } from 'react';

function InstructionsForm({ id }){

    const [instructions, setInstructions] = useState();
    const [report, setReport] = useState([]);


    //const { state } = useLocation();
    //console.log(id);

    const toggleOff = () => {
        document.getElementById("uploadInstructions").classList.toggle("s-report-form-toggler");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        fetch(`http://localhost:3001/reports/${id}`)
        .then(res => res.json())
        .then(data => setReport(data))

        console.log(report);
        
        const name = report.name;
        const user_id = report.user_id;
        const title = report.title;
        const category = report.category;
        const buildingNr = report.buildingNr;
        const roomNr = report.roomNr;
        const description = report.description;
        const urgency = report.urgency;
        const progress = report.progress;
        const images = report.images;

        setReport({name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images});

        fetch(`http://localhost:3001/reports/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)
        }).then(response => response.json())
        .then(json => console.log(JSON.stringify(json)))
        
        toggleOff();
    }
    
   
    return(
        <div id="uploadInstructions" className='s-report-form'>
            <h1>UPLOAD INSTRUCTIONS</h1>
            <form className="form-container">
                <div className="s-form-group">
                    <label className="s-form-label">ReportID:</label>
                    <input 
                    type="text" 
                    id="ReportID" 
                    value={id} 
                    className="s-form-field2" 
                    readOnly />
                </div>
                <div className="s-form-group1">  
                    <label className="s-form-label">Instructions:</label>
                    <textarea onChange={(event) => setInstructions(event.target.value)} name="postContent" rows={4} cols={40} />
                </div>
                
                <div className="s-form-group">
                    <input
                    type="file"
                    id = "upload-file"
                    className="primary-button"
                    />
                </div>
                <div className='s-button-container'>
                    <button type="button" onClick={toggleOff} className="s-cancel-button">Cancel</button>
                    <button type="submit" onClick={onSubmit} className="s-submit-button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InstructionsForm