
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screen/home/home';
import Overview from './screen/overview/overview';
import Messages from './screen/messages/messages';
import Orders from './screen/orders/orders';
import AddOrder from './screen/add-order/addOrder';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route path="/" element={<Navigate replace to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="/order-list" element={<Orders />}>
         
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path="add-order" element={<AddOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
