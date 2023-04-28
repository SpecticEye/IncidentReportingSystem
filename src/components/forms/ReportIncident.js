import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../stylesheets/Report-Form.css';

const ReportIncident = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [buildingNr, setBuildingNr] = useState('');
    const [roomNr, setRoomNr] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);
    const progress = 0;
    const urgency = Math.floor(Math.random() * 10);
    const instructions = "";
    const name = "Ahmed Ali";
    const user_id = "U0000000";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { name, user_id, title, category,
             buildingNr, roomNr, description, progress, urgency, instructions, images};
    
        fetch('http://localhost:3001/reports/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)
        }).then(() => {
            navigate("/");
        })
    }
  
    return (
    <div className='report-form'>
        <h1>Submit Request </h1>
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Name:</label>
                <input 
                type="text" 
                id="name" 
                value="Ahmed Ali" 
                className="form-field2" 
                readOnly />
            </div>
            <div className="form-group">
                <label className="form-label">ID:</label>
                <input 
                type="text" 
                id="id" 
                value="U0000000"
                className="form-field2"
                readOnly />
            </div>
            <div className="form-group">
                <label className="form-label">Title:</label>
                <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="form-field"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Category:</label>
                <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="form-field"
                >
                <option value="">Select category</option>
                <option value="Electrical">Electrical</option>
                <option value="Construction">Construction</option>
                <option value="Plumbing">Plumbing</option>
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Building Nr:</label>
                <input
                type="text"
                value={buildingNr}
                onChange={(event) => setBuildingNr(event.target.value)}
                className="form-field"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Room Nr:</label>
                <input
                type="text"
                value={roomNr}
                onChange={(event) => setRoomNr(event.target.value)}
                className="form-field"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Description:</label>
                <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="form-field"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Images:</label>
                <input
                type="file"
                id = "upload-images"
                className="primary-button"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImages(event.target.files[0]);
                  }}
                multiple
                />
            </div>
            <div className='button-container'>
                <button type="button" onClick={()=> navigate("/")} className="cancel-button">Cancel</button>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
      </div>
    );
  };

export default ReportIncident;