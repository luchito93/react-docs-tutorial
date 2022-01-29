import { useEffect, useState } from "react/cjs/react.development"

 /**
  * Example 1 with clasic use of state
  */
 const CounterLocalStorage = () => {
     const [count, setCount] = useState(() => {
         let value
         try {
             value = JSON.parse(window.localStorage.getItem('my-app-count') || '0') 
         } catch {
             value = 0
         }
         return value
     })

     useEffect(() => {
         window.localStorage.setItem('my-app-count', count)
     }, [count])

     return (
         <div className="my-4">
             <h2 className="my-2">Using clasic hook</h2>
             <button onClick={() => setCount(count + 1)} className="flex justify-center items-center h-9 w-44 border border-blue-400
             shadow-md rounded-md cursor-pointer hover:border-blue-700">cantidad de clics {count}</button>
         </div>
     )
 }


 /**
  * Reuse the previus logic with a custom hook
  */

 const useLocalStorageCounter = (keyStorage, dfValue) => {
    const [state, setState] = useState(() => {
        let value
        try {
            value = JSON.parse(window.localStorage.getItem(keyStorage) || String(dfValue)) 
        } catch {
            value = 0
        }
        return value
    })

    useEffect(() => {
        window.localStorage.setItem(keyStorage, state)
    }, [state])

    return [state, setState]
 }

 const CounterCustom = () => {
     const [count, setCount] = useLocalStorageCounter('custom-hook-counter', 0)

     return (
        <div className="my-4">
            <h2 className="my-2">Using custom hook</h2>
            <button onClick={() => setCount(count + 1)} className="flex justify-center items-center h-9 w-44 border border-blue-400
            shadow-md rounded-md cursor-pointer hover:border-blue-700">cantidad de clics {count}</button>
        </div>
     )
 }

 export {
    CounterLocalStorage,
    CounterCustom
 }
