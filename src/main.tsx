import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllChamp from './pages/AllChamp.tsx'
import { ToastContainer } from 'react-toastify'



import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://351f789d034ab7523d57a717707f2391@o4510912026312704.ingest.de.sentry.io/4510951046119504",

  sendDefaultPii: true
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllChamp/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
