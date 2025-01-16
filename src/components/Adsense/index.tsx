import { useEffect } from 'react';

export default function AdSense() {
	useEffect(() => {
		try {
			// @ts-ignore
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {
			console.error('Erro ao carregar anúncios', e);
		}
	}, []);

	return (
		<ins
			className="adsbygoogle"
			style={{ display: 'block' }}
			data-ad-client={import.meta.env.VITE_REACT_APP_GOOGLE_ADSENSE}
			data-ad-slot={import.meta.env.VITE_REACT_APP_GOOGLE_ADSENSE_AD_BLOCK_ID_SLOT}
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	);
}
