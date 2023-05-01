import '../../stylesheets/Report-Form.css'
import { useState } from 'react';

function InstructionsForm({ id }){

    const [instructions, setInstructions] = useState();

    const toggleOff = () => {
        document.getElementById("uploadInstructions").classList.toggle("s-report-form-toggler");
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
        const images = reportOld.images;
        const urgency = reportOld.urgency;
        const progress = reportOld.progress;
        
        const reportNew = {id, name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images}
        
        fetch(`http://localhost:3001/reports/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reportNew)
        }).then(response => response.json())
        .then(json => console.log(JSON.stringify(json)))
        
        toggleOff();
        window.location.reload(false);
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