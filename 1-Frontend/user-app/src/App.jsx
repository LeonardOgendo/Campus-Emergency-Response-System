import './App.css';
import './styles.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Account from './components/pages/Account';
import Notificication from './components/pages/Notification';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Messages from './components/pages/Messages';

const App = () => {
    return(
        <div >
        <BrowserRouter>
          <Routes>
            {/*-- Public Routes: Login and Register --*/}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/*-- Protected Routes: Requires Authentication --*/}
            <Route path="/user" element={<Layout />}>
              <Route path='user/register' element={<Register />} />
              <Route path='user/home' element={<Home />} />
              <Route path='user/account' element={<Account />} />
              <Route path='user/notification' element={<Notificication />} />
              <Route path='user/messages' element={<Messages />} />
              <Route path='user/contact' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App