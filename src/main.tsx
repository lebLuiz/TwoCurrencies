import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import AdSense from './components/Adsense';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		<AdSense />
	</StrictMode>
);
