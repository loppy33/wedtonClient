import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.sass'
import { TonConnectUIProvider } from '@tonconnect/ui-react';


createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider
    manifestUrl="https://weedton-client.vercel.app/tonconnect-manifest.json"
    actionsConfiguration={{
      twaReturnUrl: 'https://t.me/keksyKiss_bot/myapptest'
    }}
  >
    <App />
  </TonConnectUIProvider>
)
