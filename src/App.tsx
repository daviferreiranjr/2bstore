import { Global } from "./styles/Global";
import { Router } from './routes';
import { CartProvider } from './providers/ContextCart';

function App() {

  return (
  <>
    <CartProvider>
      <Global />
      <Router />
    </CartProvider>
  </>
  )
}

export default App
