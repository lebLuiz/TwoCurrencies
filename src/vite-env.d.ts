/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_REACT_APP_API_URL: string;
	readonly VITE_REACT_APP_API_KEY: string;
	readonly VITE_REACT_APP_GOOGLE_ADSENSE: string;
	readonly VITE_REACT_APP_GOOGLE_ADSENSE_AD_BLOCK_ID_SLOT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
