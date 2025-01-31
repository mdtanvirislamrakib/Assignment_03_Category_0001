/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color': 'rgb(255, 220, 38)',
            'nav-bg': 'rgb(255, 249, 244)',
            'card-bg': 'rgb(249, 223, 138)',
            'card-color-1': 'rgb(248, 204, 251)',
            'card-color-2': 'rgb(172, 210, 253)',
            'card-color-3': 'rgb(255, 249, 244)',
            'card-color-4': 'rgb(249, 223, 138)',
        },
        fontFamily: {
            'main-font': 'Sora',
            'sub-font': 'ADLaM Display',
        }
      },
    },
    plugins: [],
}