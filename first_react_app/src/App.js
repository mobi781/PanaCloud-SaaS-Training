import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import DetailsOfUsage from './Components/DetailsOfUsage'
import { History } from './Components/History'
import AddNew from './Components/AddNew'

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <DetailsOfUsage />
        <History />
        <AddNew />


      </div>
    </div>
  );
}

export default App;
