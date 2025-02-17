import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/Table.tsx'
import PrivateRoute from './PrivateRoute.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/second-page' element={<Table/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
