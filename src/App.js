import './App.css';
import NavigationBar from './components/NavigationBar';
import {
  HashRouter as Router,
} from "react-router-dom";

import Routes from './components/Routes';

function App() {
  return (
    <div className="container mt-5">
      <Router>
         <NavigationBar />
         <Routes />
      </Router>
    </div>
  );
}

export default App;
