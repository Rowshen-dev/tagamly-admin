import { Store, ShoppingBag, BarChart2, CreditCard, Globe, MapPin, Users, Languages } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
    { to: '/orders', icon: ShoppingBag, label: 'Заказы'},
    { to: '/establishments', icon: Store, label: 'Заведения'},
    { to: '/languages', icon: Globe, label: 'Язык'},
    { to: '/regions', icon: MapPin, label: 'Регионы'},
    { to: '/users', icon: Users, label: 'Пользователи'},
    { to: '/translations', icon: Languages, label: 'Переводы'},
]

export default function Sidebar() {
    return (
        <div style={{
            width: '220px',
            minHeight: '100vh',
            borderRight: '1px solid #eee',
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
        }}>
            <div style={{ padding: '0 20px 24px'}}>
                <span style={{ color: '#F97316', fontWeight: 'bold', fontSize: '20px'}}>Tagamly</span>
            </div>

            {links.map (({ to, icon: Icon, label }) => (
                <NavLink key={to} to={to} style={({isActive}) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    color: isActive ? '#F97316' : '#333',
                    backgroundColor: isActive ? '#FFF7ED' : 'transparent',
                    borderLeft: isActive ? '3px solid #F97316' : '3px solid transparent',
                    fontSize: '14px'
                })}>
                    <Icon size = {18} />
                    {label}
                </NavLink>
            ))}

            <div style={{ marginTop: 'auto', padding: '20px', borderTop: '1px solid #eee '}}>
                <div style={{fontWeight: 'bold', fontSize: '14px'}}>admin</div>
                <div style={{color: '#999', fontSize: '12px'}}>Admin</div>
            </div>
        </div>
    )
}