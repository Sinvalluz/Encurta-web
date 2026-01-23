import { useTranslation } from 'react-i18next';
import ShortenerForm from '../ShortenerForm';

const Main = () => {
	const { t } = useTranslation();
	return (
		<main className='mt-40 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
			<h2 className='text-4xl md:text-6xl mb-6 text-secondary-light dark:text-secondary-dark font-medium '>
				{t('subtitle')}
			</h2>
			<p className='text-xl max-w-2xl mx-auto text-secondary-light font-light dark:opacity-70  dark:text-secondary-dark dark:font-extralight mb-6'>
				{t('description')}
			</p>
			<div className='h-[0.5px] bg-secondary-light dark:bg-secondary-dark w-4/5 mx-auto mb-6 opacity-50'></div>
			<ShortenerForm />
		</main>
	);
};

export default Main;
