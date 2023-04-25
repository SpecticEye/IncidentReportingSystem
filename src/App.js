import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Test from "./components/pages/Test";
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Details from './components/pages/Details';
import ReportIncident from './components/pages/ReportIncident';
import DetailsDemo from "./components/pages/DetailsDemo";
import Login from "./components/pages/Login";
import EditStatus from "./components/pages/EditStatus";
import InstructionsForm from "./components/pages/InstructionsForm";
import AssignReport from "./components/pages/AssignReport";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/"element={<Dashboard/>}/>
          <Route exact path="/Test"element={<Test/>}/>
          <Route exact path="/Login"element={<Login/>}/>
          <Route exact path="/Details/:id"element={<Details/>}/>
          <Route exact path="/DetailsDemo"element={<DetailsDemo/>}/>
          <Route exact path="/ReportIncident"element={<ReportIncident/>}/>
          <Route exact path="/EditStatus"element={<EditStatus/>}/>
          <Route exact path="/UploadInstructions"element={<InstructionsForm/>}/>
          <Route exact path="/AssignReport"element={<AssignReport/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
