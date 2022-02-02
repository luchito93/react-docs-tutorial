import { useEffect, useRef, useState } from "react"

const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

const PreviosValueHook = () => {
    const [count, setCount] = useState(0)
    const previous = usePrevious(count)
    return (
        <div className="my-4">
            <h1 className="pb-1">Obtener el valor anterior renderizado</h1>
            <button className="block border border-yellow-300 px-1" onClick={() => setCount(count + 1)}>
                Aumentar current value
            </button>
            <div className="flex w-full md:w-3/12 justify-between">
                <p className="font-bold">Annterior <span className="text-red-800">{previous}</span></p>
                <p className="font-bold">Current <span className="text-lime-800">{count}</span></p>
            </div>
        </div>
    )
}

export default PreviosValueHook