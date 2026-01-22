import { useTranslation } from 'react-i18next';

const Main = () => {
	const { t } = useTranslation();
	return (
		<main className='mt-40 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
			<h2 className='text-4xl md:text-6xl mb-6 text-secondary-light dark:text-secondary-dark font-medium '>
				{t('subtitle')}
			</h2>
			<p className='text-xl max-w-2xl mx-auto text-secondary-light opacity-70 dark:text-secondary-dark font-extralight '>
				{t('description')}
			</p>
		</main>
	);
};

export default Main;
