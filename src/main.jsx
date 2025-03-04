import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/query-clinent.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <QueryClientProvider client={client}>

    <App />
  </QueryClientProvider>
  </BrowserRouter>


)
