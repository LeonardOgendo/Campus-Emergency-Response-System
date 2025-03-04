import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './components/Contact';
import Account from './components/Account';
import Notificication from './components/Notification';
import Layout from './components/Layout';

const App = () => {
    return(
        <div >
        <BrowserRouter>
          <Routes>
            <Route index element={<Layout />} />
            <Route path='/home' element={<Layout />} />
            <Route path='/account' element={<Account />} />
            <Route path='/notification' element={<Notificication />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App