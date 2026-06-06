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
                orders_title: 'Sargytlar',
                add_establishments: 'Restoran gosmak',
                add_language_title: 'Dil gosmak',
                add_regions_title: 'Sebit gosmak',
                add_user_title: 'Ulanyjy gosmak',
                add_translation_title: 'Terjime gosmak'
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
                    add_establishments: 'Добавить заведение',
                add_language_title: 'Добавить язык',
                add_regions_title: 'Добавить регион',
                add_user_title: 'Добавить пользователя',
                add_translation_title: 'Добавить перевод',

            }
        }
    }
})

export default i18n