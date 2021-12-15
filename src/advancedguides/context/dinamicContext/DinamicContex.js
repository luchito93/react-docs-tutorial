import { Component } from "react"
import ThemedButton from "./ThemedButton"
import { themes, ThemeContext } from "./ContextVars"

// Intermediate component for ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Cambia mi tema hermoso
        </ThemedButton>
    )
}

class ParentThemeContex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.dark
        }
    }

    handleChangueTheme = () => {
        this.setState((currentState) => (
            {
                theme: currentState.theme.tailwind === themes.dark.tailwind ?
                        themes.light :
                        themes.dark
            }
        ))
    }

    render() {
        return (
            <div className="mt-4">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.handleChangueTheme} />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default ParentThemeContex