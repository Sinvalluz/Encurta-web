import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

export function RedirectPage() {
	const { code } = useParams<{ code: string }>();
	const { t } = useTranslation();

	useEffect(() => {
		if (code) {
			window.location.href = `http://localhost:8080/api/link/${code}`;
		}
	}, [code]);

	return (
		<main className='mt-40 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
			<p className='text-secondary-light dark:text-secondary-dark'>
				{t('redirecting')}
			</p>
		</main>
	);
}
