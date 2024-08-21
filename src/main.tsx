import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.sass'
import { TonConnectUIProvider } from '@tonconnect/ui-react';


createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl="https://https://weedton-client.vercel.app//tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>
)
