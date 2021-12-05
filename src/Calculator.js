import { Component } from "react";
import BoilingVeredict from "./BolingVeredict";
import TemperatueInput from "./TemperatureInput";

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'            
        }
    }

    handleCelciusChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    handelFarenheitChange = (temperature) => {
        this.setState(
            {
                temperature: temperature,
                scale: 'f'
            }
        )
    }

    toCelcius = (farenheit) => {
        return (farenheit - 32) * 5 / 9
    }

    toFarenheit = (celcius) => {
        return (celcius * 9 / 5) + 32
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature)
        if(Number.isNaN(input)) {
            return ''
        }
        const output = convert(input)
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString()
    }

    render() {
        const { temperature } = this.state
        const { scale } = this.state
        const celcius = scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelcius)
        const farenheti = scale === 'f' ? temperature : this.tryConvert(temperature, this.toFarenheit)
        return (
            <div>
                <legend>Sync and lift state</legend>
                <TemperatueInput scale="c" temperature={celcius} onTempChange={this.handleCelciusChange} />
                <TemperatueInput scale="f" temperature={farenheti} onTempChange={this.handelFarenheitChange} />
                <BoilingVeredict celcius={parseFloat(celcius)}/>
            </div>
        )
    }
}

export default Calculator