import ReactDOM from 'react-dom';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const App = lazy(() => import("./App"))
const VolidCalculator = lazy(() => import('./advancedguides/codesplitin/VolidCalculator'))
const AdvancedGuides = lazy(() => import('./advancedguides/codesplitin/AdvancedGuides'))

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Cargando criaguras ..............</div>}>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/voild-calculator" element={<VolidCalculator />} />
        <Route path="/advanced-guides" element={<AdvancedGuides />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
