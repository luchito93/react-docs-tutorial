import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import VolidCalculator from './advancedguides/codesplitin/VolidCalculator';
import AdvancedGuides from './advancedguides/codesplitin/AdvancedGuides';
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/voild-calculator" element={<VolidCalculator />} />
      <Route path="/advanced-guides" element={<AdvancedGuides />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
