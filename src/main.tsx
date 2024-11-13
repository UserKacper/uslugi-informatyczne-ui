import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from './components/comps/footer.tsx'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
        <App />
        <Footer />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
