import { ThemeContextChild, themes } from "./ContextVars";
import { Component } from "react";

function ThemeTogleButtonChild (props) {
    return (
        <ThemeContextChild.Consumer>
            {
                (
                    ({ theme, changueTheme }) => (
                        <button onClick={changueTheme} className={ theme.tailwind } >{ props.innerTheme }</button>
                    )
                )
            }
        </ThemeContextChild.Consumer>
    )
}

function ContainerMiddle(props) {
    return (
        <div className="mt-4">
            <ThemeTogleButtonChild innerTheme="Changue Theme from child" />
        </div>
    )
}

class ParentContexApp extends Component {
    constructor(props) {
        super(props)

        this.changueTheme = () => {
            this.setState((currentState) => (
                {
                    theme: currentState.theme.tailwind === themes.dark.tailwind ?
                            themes.light :
                            themes.dark
                }
            ))
        }

        this.state = {
            theme: themes.dark,
            changueTheme: this.changueTheme
        }
    }

    render () {
        return (
            <div>
                <ThemeContextChild.Provider value={this.state}>
                    <ContainerMiddle />
                </ThemeContextChild.Provider>
            </div>
        )
    }
}

export default ParentContexApp