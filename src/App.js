import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <nav className="navbar navbar-expand navbar-dark bg-dark py-4">
          <Link to={"/adduser"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/adduser"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/adduser"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/addUser" element={<AddUser/>} />
            <Route exact path="/viewUser/:id" element={<ViewUser/>} />
            <Route exact path="/edituser/:id" element={<EditUser/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
 