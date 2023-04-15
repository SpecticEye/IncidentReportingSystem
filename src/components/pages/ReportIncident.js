import { useState } from 'react';
import '../../stylesheets/Report-Form.css';

const ReportIncident = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [buildingNr, setBuildingNr] = useState('');
    const [roomNr, setRoomNr] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);

    const name = "Kanye West";
    const user_id = "U0000000";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { name, user_id, title, category,
             buildingNr, roomNr, description, images};
    
    fetch('http://localhost:8000/reports/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report)
    }).then(() => {
      console.log('new report added');
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
                value="Kanye West" 
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
                <button type="button" className="cancel-button">Cancel</button>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
      </div>
    );
  };

export default ReportIncident;