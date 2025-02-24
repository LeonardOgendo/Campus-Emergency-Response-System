import './App.css';
import {  Browserrouter, Routes, Route } from "react-router-dom"
import Contact from './components/contact';
import Account from './components/Account';
import Notificication from './components/Notification';
import Home from './components/Home';

const App = () => {
    return(
        <div >
        <Browserrouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/notification' element={<Notificication/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        </Browserrouter>
        </div>
    )
}

export default App