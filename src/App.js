
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screen/home/home';
import Overview from './screen/overview/overview';
import Calendar from './screen/calendar/calendar';
import PatientList from './screen/patientList/patientList';
import Messages from './screen/messages/messages';
import PaymentInformation from './screen/paymentInformation/paymentInformation';
import Setting from './screen/setting/setting';
import UpcomingAppoinments from './screen/upcomingAppoinments/upcomingAppoinments';
import PastAppoinments from './screen/pastAppoinments/pastAppoinments';
import MedicalRecord from './screen/medicalRecord/medicalRecord';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route path="/" element={<Navigate replace to="/patientList/upcomingAppoinments" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="calender" element={<Calendar />} />
          <Route path="/" element={<PatientList />}>
            <Route path="patientList/upcomingAppoinments" element={<UpcomingAppoinments />} />
            <Route path="patientList/pastAppoinments" element={<PastAppoinments />} />
            <Route path="patientList/medicalRecord" element={<MedicalRecord />} />
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path="paymentInformation" element={<PaymentInformation />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
