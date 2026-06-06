import { Store, ShoppingBag, BarChart2, CreditCard, Globe, MapPin, Users, Languages } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


export default function Sidebar() {
    const { t } = useTranslation()
    const links = [
    { to: '/orders', icon: ShoppingBag, label: t('orders')},
    { to: '/establishments', icon: Store, label: t('establishments')},
    { to: '/languages', icon: Globe, label: t('language')},
    { to: '/regions', icon: MapPin, label: t('regions')},
    { to: '/users', icon: Users, label: t('users')},
    { to: '/translations', icon: Languages, label: t('translations')},
]
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

            <div style={{padding: '12px 20px', display: 'flex', gap: '8px', marginTop: 'auto'}}>
                <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
                <button onClick={() => i18n.changeLanguage('tk')}>Turkmen</button>
            </div>

            <div style={{ padding: '20px', borderTop: '1px solid #eee '}}>
                <div style={{fontWeight: 'bold', fontSize: '14px'}}>admin</div>
                <div style={{color: '#999', fontSize: '12px'}}>Admin</div>
            </div>
        </div>
    )
}