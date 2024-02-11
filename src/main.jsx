import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import { ProductProvider } from './context/productContext.jsx'
import { BasketProvider } from './context/basketContext.jsx'
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* productprovider v basket provider ı sarmalıyoruz yerlerinin değişik olması birşeyi etkilemez basket product yerinde olabilir. sırası önemli değil */}
    <ProductProvider>
      <BasketProvider>
    <App />
    </BasketProvider>
    </ProductProvider>

    <ToastContainer
    position="bottom-right"
    autoClose={750}
    limit={3}
    transition={Flip}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
        
    />

  </React.StrictMode>,
)
