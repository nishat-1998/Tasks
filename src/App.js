import logo from './logo.svg';
import './App.css';
  import { Toaster } from "react-hot-toast";
import TableData from './Component/TableData/TableData';
import UserDashboard from './Component/UserDashboard/UserDashboard';

function App() {
  return (
    <div className="App">
    <UserDashboard/>
      <TableData/> 
      <Toaster/>
    </div>
  );
}

export default App;
