const scalesNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
}

function TemperatueInput (props) {
    const {temperature} = props
    const {scale} = props
    const {onTempChange} = props
    return (
        <fieldset>
            <legend>Enter temperature in {scalesNames[scale]}:</legend>
            <input value={temperature} onChange={(e) => onTempChange(e.target.value)} />
        </fieldset>
    )
}

export default TemperatueInput