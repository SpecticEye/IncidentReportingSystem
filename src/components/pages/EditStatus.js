import { useState } from 'react';
import '../../stylesheets/Report-Form.css'

function EditStatus({ id }){

    const [progress, setProgress] = useState();
    const [urgency, setUrgency] = useState();
    const [report, setReport] = useState([]);

    const toggleOff = () => {
        document.getElementById("editStatus").classList.toggle("s-report-form-toggler");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        fetch(`http://localhost:3001/reports/${id}`)
        .then(res => res.json())
        .then(data => setReport(data))

        console.log(report);

        console.log(urgency + " " + progress);
        
        const name = report.name;
        const user_id = report.user_id;
        const title = report.title;
        const category = report.category;
        const buildingNr = report.buildingNr;
        const roomNr = report.roomNr;
        const description = report.description;
        const instructions = report.instructions;
        const images = report.images;
        const newReport = {name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images}
        //console.log({name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images});
        
        setReport(newReport);
        console.log(report);
/*
        fetch(`http://localhost:3001/reports/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)
        }).then(response => response.json())
        .then(json => console.log(JSON.stringify(json)))
        
        toggleOff();*/
    }
   
    return(
        <div id="editStatus" className='s-report-form'>
            <h1>EDIT REPORT STATUS</h1>
            <form className="form-container">
                <div className="form-group">
                    <label className="form-label">Urgency:</label>
                    <input 
                    type = "number" min = {1} max = {10}
                    id="Urgency" 
                    className="form-field2" 
                    onChange={(event) => setUrgency(event.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Progress%:</label>
                    <input 
                    type = "number" min = {0} max = {100}
                    id="progress" 
                    className="form-field2"
                    onChange={(event) => setProgress(event.target.value)} 
                    />
                </div>    
                <div className='button-container'> 
                    <button type="submit" onClick={onSubmit} className="submit-button">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditStatus