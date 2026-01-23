import { Copy, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

type CardUrlShortedProps = {
	url?: string;
};

const CardUrlShorted = ({ url }: CardUrlShortedProps) => {
	const { t } = useTranslation();
	return (
		<div className=' flex flex-col p-3 border-green-200 rounded-md border'>
			<p className='text-sm text-green-800 dark:text-green-400 mb-2'>
				{t('messageShortedLink')}
			</p>
			<div className='flex items-center justify-between gap-3 '>
				<span className='text-sm truncate flex-1 text-secondary-light dark:text-secondary-dark'>
					http://localhost:5173/{url}
				</span>

				<div className='flex gap-2 shrink-0 '>
					<Button className='bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'>
						<Copy />
					</Button>
					<Button className='bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'>
						<ExternalLink />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CardUrlShorted;
