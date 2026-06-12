import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  Sidebar  from "./components/Sidebar";
import Establishments from './pages/Establishments';
import Languages from './pages/Languages'
import Regions from "./pages/Regions";
import Orders from './pages/Orders';
import Users from "./pages/Users";
import Translations from './pages/Translations';
import RestaurantsPage from './pages/RestaurantsPage';
import Menu from './pages/Menu';
import { useLocation } from "react-router-dom";



function AppContent() {
    const location = useLocation()
    const isMenu = location.pathname.startsWith('/menu')
    
    return (
        <div style={{display: 'flex'}}>
            {!isMenu && <Sidebar />}
            <main style={{ flex: 1, padding: '24px'}}>
                <Routes>
                    <Route path="/" element = {<Navigate to="/establishments" />} />
                    <Route path="/menu/:subdomain" element = {<RestaurantsPage />} />
                    <Route path="/establishments" element = {<Establishments />} />
                    <Route path="/languages" element = {<Languages />} />
                    <Route path="/regions" element = {<Regions />} />
                    <Route path="/orders" element = {<Orders />} />
                    <Route path="/users" element = {<Users />} />
                    <Route path="/translations" element = {<Translations />} />
                    <Route path="/menu" element = {<Menu />} />
                </Routes>
            </main>
        </div>
            
    )
}


export default function App() {
    return (
        <BrowserRouter>
        <AppContent />
        </BrowserRouter>
    )
}