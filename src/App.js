import Topbar from './Components/Topbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
      </Router>
    </div>
  );
}

export default App;
