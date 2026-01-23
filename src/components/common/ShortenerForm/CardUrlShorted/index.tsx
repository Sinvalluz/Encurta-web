import { Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

type CardUrlShortedProps = {
	url?: string;
};

const CardUrlShorted = ({ url }: CardUrlShortedProps) => {
	const { t } = useTranslation();
	const [copy, setCopy] = useState<boolean>(false);

	const copyText = async () => {
		try {
			await navigator.clipboard.writeText(
				`${import.meta.env.VITE_INDEX_URL}${url}`,
			);
			setCopy(true);

			setTimeout(() => {
				setCopy(false);
			}, 1000);
		} catch (err) {
			console.error('Falha ao copiar texto: ', err);
		}
	};

	return (
		<div className=' flex flex-col p-3 border-green-200 rounded-md border'>
			<p className='text-sm text-green-800 dark:text-green-400 mb-2'>
				{t('messageShortedLink')}
			</p>
			<div className='flex items-center justify-between gap-3 '>
				<span className='text-sm truncate flex-1 text-secondary-light dark:text-secondary-dark'>
					{copy
						? t('messageCopy')
						: `${import.meta.env.VITE_INDEX_URL}${url}`}
				</span>

				<div className='flex gap-2 shrink-0 '>
					<Button
						className='bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'
						onClick={copyText}
						title='Copiar'
					>
						<Copy />
					</Button>
					<a
						href={import.meta.env.VITE_INDEX_URL + url}
						target='_blank'
					>
						<Button className='bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'>
							<ExternalLink />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardUrlShorted;
