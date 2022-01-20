import { useState, createRef, useEffect } from "react"
import Portal from "./Portal"

/**
 * Example portal explication
 * https://blog.logrocket.com/learn-react-portals-by-example/
 * 
 * Example sanbox use portal
 * https://codesandbox.io/s/github/supromikali/react-portals-example?file=/src/index.js:693-707
 * 
 * example debounce founctin loudash vanilla js
 * https://www.joshwcomeau.com/snippets/javascript/debounce/
 */

const Image = () => (
    <img src="https://cdn.pixabay.com/photo/2019/11/29/14/18/gent-4661419_960_720.jpg"
    className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full -z-10"
    alt="container must be overflow:hidden" />
)

const Tooltip = ({children, coords, updateTooltipCoords }) => {
    const debounce = (callback, wait) => {
        let timeoutId = null
        return (...args) => {
          window.clearTimeout(timeoutId)
          timeoutId = window.setTimeout(() => {
            callback.apply(null, args)
          }, wait)
        }
      }

      const updateCordsFun = debounce(updateTooltipCoords, 100)

      useEffect(() => {
          window.addEventListener('resize', updateCordsFun)
          return () => window.removeEventListener('resize', updateCordsFun)
      }, [])

      return (
          <div className="-translate-x-28 -translate-y-full absolute pb-4" style={{...coords}}>
              <div className="w-52 rounded-md shadow-md border border-slate-400 bg-white">
                    <h3 className="border-b border-slate-400 p-3 pb-2 mb-3">Title</h3>
                    <div className="p-3 pt-0">{children}</div>
                    <div className="bg-white h-5 w-5 relative left-2/4 -translate-x-2/4 rotate-45 top-2"></div>
                </div>
          </div>
      )
}

const btnRef = createRef()
const UsePortal = () => {
    const [isOn, setOn] = useState(false)
    const [coords, setCoords] = useState({})
    const updateTooltipCoords = button => {
        const rect = button.getBoundingClientRect()
        setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY
        })
    }
    
    useEffect(() => {
        console.log('Montando el componente portal')
        return () => console.log('Desmontando el componente portal')
    }, [])

    return (
        <div className="my-5">
            <h3>Use portals</h3>
            <div className="mt-2 p-12 overflow-hidden relative">
                <Image />
                <button ref={btnRef}
                    className="flex ml-auto h-9 border rounded-md
                    shadow-inner bg-slate-100 text-black
                    items-center px-6 hover:bg-slate-300" onClick={e => {
                    updateTooltipCoords(e.target)
                    setOn(!isOn)
                }}>activar portal tooltip</button>
                { isOn && (
                    <Portal>
                        <Tooltip coords={coords} updateTooltipCoords={() => updateTooltipCoords(btnRef.current)}>
                          <div>
                             Awesome content that is never cut off by its parent container!
                          </div>
                        </Tooltip>
                    </Portal>
                )}
            </div>
        </div>
    )
}

export default UsePortal