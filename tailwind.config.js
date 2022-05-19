module.exports = {
    content: [
        "./html/home.html"
    ],
    future: {},
    theme: {
        colors: {
            'purple': '#A863A2',
            'pink': {
                500: '#F3D3BD',
                700: '#fcc9b4'
            },
            'white-egg': '#FCFAF9',
            'grey': '#5E5E5E',
        }
    },
    variants: {},
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
    ]
}