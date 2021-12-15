import { createContext } from "react"

const themes = {
    light: {
        tailwind: 'bg-white h-10 px-4 flex items-center justify-center text-black shadow-md shadow-black cursor-pointer rounded-md'
    },
    dark: {
        tailwind: 'bg-gray-800 h-10 px-4 flex items-center justify-center text-white shadow-md shadow-white cursor-pointer rounded-md'
    }
}


const ThemeContext = createContext(themes.dark)
const ThemeContextChild = createContext({
    theme: themes.dark,
    changueTheme: () => {}
})

export {
    themes,
    ThemeContext,
    ThemeContextChild
}

