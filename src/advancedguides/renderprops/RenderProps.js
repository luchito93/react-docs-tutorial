import { useState } from "react"
import { useEffect } from "react/cjs/react.development"


const Cat = ({coords})  => {
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })
    useEffect(() => {
        setPosition({
            top: coords.y > 0 ? coords.y - 500 : coords.y,
            left: coords.x > 0 ? coords.x - 150 : coords.x
        })
    }, [coords])
    return (
        <img src="https://p1.hiclipart.com/preview/978/592/887/kitten-cat-cuteness-kawaii-drawing-black-cat-cartoon-small-to-mediumsized-cats-png-clipart-thumbnail.jpg" 
        alt="cat"
        className="absolute h-16 w-16"
        style={{...position}}/>
    )
}

 const Mouse = (props) => {
    const [coords, setCoords] = useState({ x:0, y:0 })

    const handleMouseMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        })
    }

    return (
        <div className="my-4">
            <h1 className="text-center font-bold mb-2">Render Props Example</h1>
            <div className="w-full h-96 border border-emerald-700 bg-lime-100 relative
                flex flex-col items-center justify-center rounded-md cursor-pointer" onMouseMove={handleMouseMove}>
                    {props.children(coords)}
                    {props.render(coords)}
            </div>
        </div>
    )
}

/**
 * avobe show two forms for create a render props, one is with the prop render
 * and the other is with children
 * "any prop that is a function that a component uses to know what to render is technically a “render prop”."
 */
const MouseTrackerTwo = () => {
    return (
        <Mouse render={coords => <Cat coords={coords} />}>
            {
                coords => {
                    return (
                        <>
                            <h1 className="pb-3">Move the mouse around Tracker thid card</h1>
                            <p>The current mouse position is ({coords.x}, {coords.y})</p>
                        </>
                    )
                }
            }
        </Mouse>
    )
}

export default MouseTrackerTwo