import Select from 'react-select'
import { useState } from 'react';

import '../../stylesheets/Report-Form.css'

export default function AssignReport({id}) {
  
  const [category, setCategory] = useState();
  const [team, setTeam] = useState();

  const [report, setReport] = useState([]);

  const options1 = [
    { value: 'Electrical', label: 'Electrical' },
    { value: 'IT', label: 'IT' },
    { value: 'Maintenance', label: 'Maintenance' }
  ];
  
  const options2 = [
      { value: 'Team1', label: 'Team1' },
      { value: 'Team2', label: 'Team2' },
      { value: 'Team3', label: 'Team3' }
  ];

  const toggleOff = () => {
      document.getElementById("assignReport").classList.toggle("s-report-form-toggler");
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
      const buildingNr = report.buildingNr;
      const roomNr = report.roomNr;
      const description = report.description;
      const urgency = report.urgency;
      const progress = report.progress;
      const images = report.images;
      const instructions = report.instructions;

      setReport({name, user_id, title, category, buildingNr, roomNr, description, progress, urgency, instructions, images, team});

      fetch(`http://localhost:3001/reports/${id}`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(report)
      }).then(response => response.json())
      .then(json => console.log(JSON.stringify(json)))
      
      toggleOff();
  }

  return (
    <div id="assignReport" className='s-report-form'>
      <h1>Assign Report</h1>  
      <form className="form-container">
        <div className="form-group">
          <label className="form-label">Department:</label>
          <Select  onChange={(event) => setCategory(getValue)} className="s-form-select" options={options1} />
        </div>
        <div className="form-group">
          <label className="form-label">Team:</label>
          <Select  onChange={(event) => setTeam(event.target.value)} className="s-form-select" options={options2} />
        </div>
        <div className='button-container'>
          <button type="button" onClick={toggleOff} className="s-cancel-button">Cancel</button>
          <button type="submit" onClick={onSubmit} className="submit-button">Assign</button>
        </div>
      </form>
    </div>
  );
}