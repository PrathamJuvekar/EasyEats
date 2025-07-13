import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/EasyEats">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
