/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // './node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}',
    ],
    // important: true,
    // enabled: process.env.NODE_ENV === 'production',
    theme: {
        extend: {
            colors: {
                gray: {
                    100: '#F5F5F5',
                    300: '#F8F8F8',
                    500: '#E0E0DF',
                    700: '#959595',
                    900: '#616161',
                },
                table: {
                    primary: '#1C1C1C',
                },
            },
        },
    },
    // plugins: [require('tw-elements/dist/plugin')],
}
