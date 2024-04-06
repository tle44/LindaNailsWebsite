import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        primary: "#7F603E",
        secondary: "#F4E0C3",
        third: "#c49a6d",
        fourth: "#e9d8c5",
    },
});

export default theme;
