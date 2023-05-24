import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ToDo from './Pages/ToDo';

/*const PrivateRoute = (props) => {
  const auth = localStorage.getItem('loggedStatus') === "true" ? true : false;
  return auth ? props.component : <Navigate to="/" />;
}*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;