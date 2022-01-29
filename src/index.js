import ReactDOM from 'react-dom';
import { Suspense, lazy, StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { GobalContext } from './advancedguides/context/ContextVar';

const App = lazy(() => import("./App"))
const VolidCalculator = lazy(() => import('./advancedguides/codesplitin/VolidCalculator'))
const AdvancedGuides = lazy(() => import('./advancedguides/codesplitin/AdvancedGuides'))
const Hooks = lazy(()=> import('./hooks/HooksIndex'))



ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <GobalContext.Provider value='Super contexto global actualizado'>
        <Suspense fallback={<div>Cargando criaguras ..............</div>}>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/voild-calculator" element={<VolidCalculator />} />
            <Route path="/advanced-guides" element={<AdvancedGuides />} />
            <Route path="/hooks" element={<Hooks />} />
          </Routes>
        </Suspense>
      </GobalContext.Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

/**
 * subir a netlify
 * instalr la extension lighthouse para ver el rendimiento
 * 
 * custom hoosk
 * https://blog.shahednasser.com/react-custom-hooks-tutorial-creating-useonline/
 * https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e
 * https://blog.logrocket.com/react-render-props-vs-custom-hooks/
 */