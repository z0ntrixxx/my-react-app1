import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles/normalize.css'; 
import './assets/styles/styles.css'; 
import './assets/styles/Slider.css';
import './assets/styles/Header.module.css';
import './assets/styles/PromoSection.module.css';
import './assets/styles/Caption.module.css';
import './assets/styles/AboutSection.module.css';
import './assets/styles/FeaturesSection.module.css';
import './assets/styles/CTASection.module.css';
import './assets/styles/Footer.module.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
