import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lng: 'tk',
    resources: {
        tk: {
            translation: {
                orders: 'Sargytlar',
                analytics: 'Statistika',
                establishments: 'Restoranlar',
                payments: 'Tölegler',
                language: 'Dil',
                regions: '',
                users: 'Ulanyjylar',
                translations: 'Terjimeler',
                admin: 'Admin',
                establishments_title: 'Restoranlar',
                payments_title: 'Tolegler',
                languages_title: 'Diller',
                regions_title: 'Sebitler',
                users_title: 'Ulanyjylar',
                orders_title: 'Sargytlar'
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
                 establishments_title: 'Заведения',
                    payments_title: 'Оплаты заведений',
                    languages_title: 'Языки',
                    regions_title: 'Регионы',
                    users_title: 'Пользователи',
                    orders_title: 'Заказы',
            }
        }
    }
})

export default i18n