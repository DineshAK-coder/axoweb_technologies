import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ContactModalProvider } from './context/ContactModalContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactModalProvider>
      <App />
    </ContactModalProvider>
  </StrictMode>,
);
