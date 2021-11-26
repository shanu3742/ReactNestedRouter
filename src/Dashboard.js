import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Darci from './Darci';
import DashboardGraphs from './DashboardGraphs';
import InvoiceList from './InvoiceList';
import Shanu from './Shanu';
function Dashboard() {
    return (
      <div>
        <p>Look, more routes!</p>
        <Routes>
          <Route path="/" element={<DashboardGraphs/>} />
          <Route path="invoices" exact element={<InvoiceList />} />
          <Route path= "invoices/Darci" exact element ={<Darci/>}/>
          <Route path= "invoices/Darci/shanu/*" exact element ={<Shanu/>}/>
          
        </Routes>
      
      </div>
    );
  }

  export default Dashboard