/**Using dot notation */

const MyComponents = {
    DatePicker: (props) => <div>Imagine a {props.color} date picker here</div>
}

const BlueDatePicker = () => <MyComponents.DatePicker color="red" />

/**Spread props */

const Button = (props) => {
    const { kind, ...other } = props
    const className = kind === 'primary' ?
      'w-40 h-10 flex justify-center items-center rounded-md bg-indigo-600 hover:bg-indigo-800 text-white' :
      'w-40 h-10 flex justify-center items-center rounded-md bg-red-600 hover:bg-red-800 text-white'
    return <button className={className} {...other}/>
}

const SpreadButton = () => {
    return (
        <div className="flex justify-between my-3">
            <Button kind="primary" onClick={() => console.log('clicked primary')}>Boton Primary</Button>
            <Button kind="danger" onClick={() => console.log('clicked danger')}>Boton Danger</Button>
        </div>
    )
}

/**Children as callback */
const Repeat = (props) => {
    let items = []
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i))
    }
    return (
        <>
            <h3 className="mt-3">Children as callback</h3>
            <div className="pl-2 my-3 bg-sky-200 rounded-md">
                
                {items}
            </div>
        </>
    )
}

const CallBackChildren = () => <Repeat numTimes={10}>
    {(index) => <div key={index}>{index} - Este es el index de la lista <span className="font-mono font-bold">{index}</span>.</div>}
</Repeat>


export {
    BlueDatePicker,
    SpreadButton,
    CallBackChildren
}