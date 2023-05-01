import Select from 'react-select'
import { useState } from 'react';

import '../../stylesheets/Report-Form.css'

export default function AssignReport({id}) {
  
  const [category, setCategory] = useState();
  const [team, setTeam] = useState();


  const options1 = [
    { value: 'Construction', label: 'Construction' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Plumbing', label: 'Plumbing' },
    { value: 'IT', label: 'IT' },
    { value: 'Maintenance', label: 'Maintenance' }
  ];
  
  const options2 = [
      { value: '0', label: 'None' },
      { value: '1', label: 'Team1' },
      { value: '2', label: 'Team2' },
      { value: '3', label: 'Team3' }
  ];

  const toggleOff = () => {
      document.getElementById("assignReport").classList.toggle("s-report-form-toggler");
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    const response = await fetch(`http://localhost:3001/reports/${id}`)
    const reportOld = await response.json();
            
    const name = reportOld.name;
    const user_id = reportOld.user_id;
    const title = reportOld.title;
    const buildingNr = reportOld.buildingNr;
    const roomNr = reportOld.roomNr;
    const description = reportOld.description;
    const images = reportOld.images;
    const urgency = reportOld.urgency;
    const progress = reportOld.progress;
    const instructions = reportOld.instructions;
    
    const reportNew = {id, name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images, team}
    
    fetch(`http://localhost:3001/reports/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportNew)
    }).then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))
      
    toggleOff();
    window.location.reload(false);
  }

  return (
    <div id="assignReport" className='s-report-form'>
      <h1>Assign Report</h1>  
      <form className="s-form-container">
        <div className="s-form-group">
          <label className="s-form-label">Department:</label>
          <Select  onChange={(event) =>setCategory(event.value)} className="s-form-select" options={options1} />
        </div>
        <div className="s-form-group">
          <label className="s-form-label">Team:</label>
          <Select  onChange={(event) => setTeam(event.value)} className="s-form-select" options={options2} />
        </div>
        <div className='s-button-container'>
          <button type="button" onClick={toggleOff} className="s-cancel-button">Cancel</button>
          <button type="submit" onClick={onSubmit} className="submit-button">Assign</button>
        </div>
      </form>
    </div>
  );
}