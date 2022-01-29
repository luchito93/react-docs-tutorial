import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";
import { themes } from "../advancedguides/context/dinamicContext/ContextVars";

const ThemeHookContex = createContext(themes.light)

const ContexHook = () => {
    const [style, setStyle] = useState({...themes.dark})
    const handlechangueTheme = () => {
        if (style.tailwind === themes.light.tailwind ) {
            setStyle({...themes.dark})
        } else {
            setStyle({...themes.light})
        }
    }
    return (
        <ThemeHookContex.Provider value={style} >
            <div className="my-4">
                <h1 className="mb-2">useContex hook example</h1>
                <MiddleWrapper onClick={handlechangueTheme}></MiddleWrapper>
            </div>
        </ThemeHookContex.Provider>
    )
}

const MiddleWrapper = (props) => (
    <div>
        <h2 {...props} className="font-mono font-bold text-purple-800 m-2">Cambia mi tema</h2>
        <ThemeButton>
            Styled button useContexHook
        </ThemeButton>
    </div>
)

const ThemeButton = (props) => {
    const theme = useContext(ThemeHookContex)

    return (
        <button className={theme.tailwind}>{props.children}</button>
    )
}

export default ContexHook