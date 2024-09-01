import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import './main.css'
import BirthPrep from '@/pages/BirthPrep.tsx'
import Pregnancy from '@/pages/Pregnancy.tsx'
import Baby from '@/pages/Baby.tsx'
import Help from '@/Help.tsx'
import Medicine from '@/pages/Medicine.tsx'
import Nutrition from '@/pages/Nutrition.tsx'
import Exercise from '@/pages/Exercise.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/pages/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/pregnancy"} element={<Pregnancy />} />
          <Route path={"/baby"} element={<Baby />} />
          <Route path={"/birthprep"} element={<BirthPrep />} />
          <Route path={"/medicine"} element={<Medicine />} />
          <Route path={"/nutrition"} element={<Nutrition />} />
          <Route path={"/exercise"} element={<Exercise />} />
          <Route path={"/help"} element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
