import { useNavigate } from "react-router-dom";

import '../../stylesheets/index.css';

function Login() {

    const navigate = useNavigate();
    
    return (
        <div>
            <button className="primary-button" onClick={()=> navigate(`/` ,{state: {MODE: 0}})}>REQUESTOR</button>
            <button className="primary-button" onClick={()=> navigate(`/` ,{state: {MODE: 1}})}>MANAGER</button>
            <button className="primary-button" onClick={()=> navigate(`/` ,{state: {MODE: 2}})}>MAINTENANCE</button>
        </div>
    )
}

export default Login;