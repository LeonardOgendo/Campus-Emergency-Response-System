import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './components/Contact';
import Account from './components/Account';
import Notificication from './components/Notification';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import Messages from './components/Messages';

const App = () => {
    return(
        <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Register />} />
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