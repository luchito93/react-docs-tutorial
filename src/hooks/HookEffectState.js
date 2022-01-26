import { useEffect, useState } from "react/cjs/react.development"

const HookEffectState = () => {
   const [counter, setCounter] = useState(0)
   useEffect(() => {
       console.log('counter rendered after update render', counter)
       return function cleanUp() {
           console.log('limpiza hook counter before update render')
       }
   })

   return (
       <div className="flex justify-center mt-3">
           <button onClick={() => setCounter(counter + 1)}
           className="flex justify-center items-center h-9 w-44 border border-green-400
             shadow-md rounded-md cursor-pointer hover:border-green-700">
                Has hecho click {counter}
           </button>
       </div>
   )
}

export default HookEffectState