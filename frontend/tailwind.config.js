/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // primary: "#ffc001",

                // secondary: "#ff9c01",
                // primary:"#C29957",
                
                primary:"#7F603E",
                secondary: "#F4E0C3",
                third:"#c49a6d",
                fourth: "#e9d8c5",
          

            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
            fontFamily: {
                cormorant: ['Cormorant Infant', 'serif'],
                playfair: ['Playfair Display SC', 'serif'],
            },
        },
    },
    plugins: [],
};
