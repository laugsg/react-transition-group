import {
  Routes,
  Route
} from 'react-router-dom'

import './styles/globals.css'

// components
import Home from './pages/Home';
import Transition from './pages/transition';
import CssTransition from './pages/csstransition';
import SwitchTransition from './pages/switchtransition';

export default function MainEntry() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/transition" element={<Transition/>}/>
      <Route path="/csstransition" element={<CssTransition/>}/>
      <Route path="/switchtransition" element={<SwitchTransition/>}/>
    </Routes>
  );
}
