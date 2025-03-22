import './App.css';
import './styles.css';

import { ToastContainer } from 'react-toastify';

import { Routes, Route, Link} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Account from './components/pages/Account';
import Notificication from './components/pages/Notification';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Messages from './components/pages/Messages';
import EmergencyReport from './components/pages/EmergencyReport';
import ProtectedRoute from './components/authentication/ProtectedRoute';

const App = () => {
    return(
        <div>
          <ToastContainer position='top-right' autoClose={4000} hideProgressBar={true}  />
          <Routes>
            {/*-- Public Routes: Login and Register --*/}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/*-- Protected Routes: Requires Authentication --*/}
            <Route element={<ProtectedRoute /> }>
              <Route path="/user" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='account' element={<Account />} />
                <Route path='notification' element={<Notificication />} />
                <Route path='messages' element={<Messages />} />
                <Route path='contact' element={<Contact />} />
                <Route path='emergency/report' element={<EmergencyReport />} />
              </Route>
            </Route>
          </Routes>
        </div>
    )
}

export default App
