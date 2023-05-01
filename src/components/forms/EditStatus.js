import { useState } from 'react';
import '../../stylesheets/Report-Form.css'

function EditStatus({ id , mode}){

    const [prog, setProgress] = useState();
    const [urg, setUrgency] = useState();

    const toggleOff = () => {
        document.getElementById("editStatus").classList.toggle("s-report-form-toggler");
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`http://localhost:3001/reports/${id}`)
        const reportOld = await response.json();
                
        const name = reportOld.name;
        const user_id = reportOld.user_id;
        const title = reportOld.title;
        const category = reportOld.category;
        const buildingNr = reportOld.buildingNr;
        const roomNr = reportOld.roomNr;
        const description = reportOld.description;
        const instructions = reportOld.instructions;
        const images = reportOld.images;
        const urgency = (mode == 1) ? parseInt(urg) : reportOld.urgency;
        const progress = parseInt(prog);
        const team = (reportOld.team) ? reportOld.team : "None";
        
        const reportNew = {id, name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images, team}
        
        fetch(`http://localhost:3001/reports/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reportNew)
        }).then(response => response.json())
        .then(() => window.location.reload(false))
        
        toggleOff();
    }
   
    return(
        <div id="editStatus" className='s-report-form'>
            <h1>EDIT REPORT STATUS</h1>
            <form className="form-container">
            { mode == 1 &&
                <div className="s-form-group">
                     
                    <label className="s-form-label">Urgency:</label>
                    <input 
                    type = "number" min = {1} max = {10}
                    id="Urgency" 
                    className="form-field2" 
                    onChange={(event) => setUrgency(event.target.value)} 
                    />
                </div>
                }
                <div className="s-form-group">
                    <label className="s-form-label">Progress (%):</label>
                    <input 
                    type = "number" min = {0} max = {100}
                    id="progress" 
                    className="form-field2"
                    onChange={(event) => setProgress(event.target.value)} 
                    />
                </div>    
                <div className='s-button-container'> 
                    <button type="button" onClick={toggleOff} className="s-cancel-button">Cancel</button>
                    <button type="submit" onClick={onSubmit} className="submit-button">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditStatus