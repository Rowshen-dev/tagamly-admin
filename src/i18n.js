import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lng: 'tk',
    resources: {
        tk: {
            translation: {
                orders: 'Sargytlar',
                analytics: 'Statistika',
                establishments: 'Kärhanalar',
                payments: 'Tölegler',
                language: 'Dil',
                regions: 'Sebitler',
                users: 'Ulanyjylar',
                translations: 'Terjimeler',
                admin: 'Admin',
            }
        },
        ru: {
            translation: {
                orders: 'Заказы',
                analytics: 'Статистика',
                establishments: 'Заведения',
                payments: 'Оплаты заведений',
                language: 'Язык',
                regions: 'Регионы',
                users: 'Пользователи',
                translations: 'Переводы',
                admin: 'Админ',
            }
        }
    }
})

export default i18n