import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import FarmersTable from './pages/Farmers.jsx'
import AddProductForm from './AddProductForm.jsx'
import RetailersTable from './pages/Retailers.jsx'
import ConsumersTable from './pages/Consumers.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/farmers' element={<FarmersTable />} />
      <Route path='/' element={<AddProductForm />} />
      <Route path='/retailers' element={<RetailersTable />} />
      <Route path='/consumers' element={<ConsumersTable />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </React.StrictMode>,
)
