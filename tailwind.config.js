/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color': 'rgb(255, 220, 38)',
            'nav-bg': 'rgb(255, 249, 244)',
            'card-bg': 'rgb(249, 223, 138)',
        },
        fontFamily: {
            'main-font': 'Sora',
            'sub-font': 'ADLaM Display',
        }
      },
    },
    plugins: [],
}