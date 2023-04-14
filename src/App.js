import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Test from "./components/pages/Test";
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Details from './components/pages/Details';
import ReportIncident from './components/pages/ReportIncident';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/"element={<Dashboard/>}/>
          <Route exact path="/Test"element={<Test/>}/>
          <Route exact path="/Details"element={<Details/>}/>
          <Route exact path="/ReportIncident"element={<ReportIncident/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
