import { Component } from "react";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        //You can also log the error to an error reportin service
        console.log('Error', error)
        console.log('Error Info', errorInfo)
    }

    render () {
        if (this.state.hasError) {
            return (
                <>
                    <h1 className="text-red-700">Ocurrio un error (actualiza el state del componente hijo)</h1>
                    <p className="font-mono text-red-500">En produccion no se vera frizado y se podra seguir interactuando</p>
                </>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundaries