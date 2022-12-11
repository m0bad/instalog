/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {join} =  require('path')

module.exports = {
    content: [
        join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ],
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
    plugins: [],
}
