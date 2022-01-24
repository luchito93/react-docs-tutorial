import ReactDOM from 'react-dom';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { GobalContext } from './advancedguides/context/ContextVar';

const App = lazy(() => import("./App"))
const VolidCalculator = lazy(() => import('./advancedguides/codesplitin/VolidCalculator'))
const AdvancedGuides = lazy(() => import('./advancedguides/codesplitin/AdvancedGuides'))



ReactDOM.render(
  <BrowserRouter>
    <GobalContext.Provider value='Super contexto global actualizado'>
      <Suspense fallback={<div>Cargando criaguras ..............</div>}>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/voild-calculator" element={<VolidCalculator />} />
          <Route path="/advanced-guides" element={<AdvancedGuides />} />
        </Routes>
      </Suspense>
    </GobalContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

/**
 * subir a netlify
 * instalr la extension lighthouse para ver el rendimiento
 */