const scalesNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
}

function TemperatueInput (props) {
    const {temperature} = props
    const {scale} = props
    const {onTempChange} = props
    return (
        <fieldset className="border shadow-sm rounded-md">
            <legend>Enter temperature in {scalesNames[scale]}:</legend>
            <input value={temperature} onChange={(e) => onTempChange(e.target.value)}  className="border rounded-md m-1
            focus:outline-gray-600 pl-1"/>
        </fieldset>
    )
}

export default TemperatueInput