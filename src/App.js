import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Test from "./components/pages/Test";
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Details from './components/pages/Details';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/"element={<Dashboard/>}/>
          <Route exact path="/Test"element={<Test/>}/>
          <Route exact path="/Details"element={<Details/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
