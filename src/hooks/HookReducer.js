import { useReducer } from "react"

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error('Missing action type')
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="my-4">
            <h1 className="mb-2 font-bold">Use Reducer hook with counter example</h1>
            <div className="flex justify-center w-full md:w-6/12 items-center">
                <button className="border border-orange-600 cursor-pointer w-5 h-5 rounded-full leading-none"
                onClick={() => dispatch({type: 'decrement'})}>
                    -
                </button>
                <p className="font-bold font-mono mx-6">{state.count}</p>
                <button className="border border-green-600 cursor-pointer w-5 h-5 rounded-full leading-none"
                onClick={() => dispatch({type: 'increment'})}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterReducer