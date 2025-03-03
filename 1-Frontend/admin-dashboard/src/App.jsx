import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import ActiveEmergencies from './components/ActiveEmergencies';
import ResolvedEmergencies from './components/ResolvedEmergencies';
import ViewResponders from './components/ViewResponders';
import AssignResponders from './components/AssignResponders';
import ApproveAccounts from './components/ApproveAccounts';
import RemoveAccounts from './components/RemoveAccounts';

const App = () => {

    console.log("Layout loaded")
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="emergencies/active" element={<ActiveEmergencies />} />
                    <Route path="emergencies/resolved" element={<ResolvedEmergencies />} />
                    <Route path="responders/view" element={<ViewResponders />} />
                    <Route path="responders/assign" element={<AssignResponders />} />
                    <Route path="users/approve" element={<ApproveAccounts />} />
                    <Route path="users/remove" element={<RemoveAccounts />} />
                </Route>
            </Routes>
       </BrowserRouter>
    )
}

export default App