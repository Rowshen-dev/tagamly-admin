import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  Sidebar  from "./components/Sidebar";
import Establishments from './pages/Establishments';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import Languages from './pages/Languages'
import Regions from "./pages/Regions";
import Orders from './pages/Orders';
import Users from "./pages/Users";
import Translations from './pages/Translations';

export default function App() {
    return (
        <BrowserRouter>
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <main style={{ flex: 1, padding: '24px'}}>
                <Routes>
                    <Route path="/" element = {<Navigate to="/establishments" />} />
                    <Route path="/establishments" element = {<Establishments />} />
                    <Route path="/payments" element = {<Payments />} />
                    <Route path="/analytics" element = {<Analytics />} />
                    <Route path="/languages" element = {<Languages />} />
                    <Route path="/regions" element = {<Regions />} />
                    <Route path="/orders" element = {<Orders />} />
                    <Route path="/users" element = {<Users />} />
                    <Route path="/translations" element = {<Translations />} />
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    )
}