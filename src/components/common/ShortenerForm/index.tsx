import { useMutation } from '@tanstack/react-query';
import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { postLink } from '@/api/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CardUrlShorted from './CardUrlShorted';

const ShortenerForm = () => {
	const { t } = useTranslation();
	const [url, setUrl] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const mutation = useMutation({
		mutationFn: postLink,
		mutationKey: ['links'],
	});

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			new URL(url);
			mutation.mutate({ originalUrl: url });
			setUrl('');
			setError(false);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.log(e.message);
			} else {
				console.log('');
			}

			setError(true);
		}
	}
	return (
		<form
			onSubmit={onSubmit}
			className='text-center'
		>
			<div className='flex flex-col gap-2 md:flex-row mb-2.5'>
				<Input
					placeholder={t('placeholder')}
					type='text'
					className='border-2 border-secondary-light dark:text-secondary-dark'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					required
				/>
				<Button
					className='flex-1 bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'
					disabled={mutation.isPending}
				>
					{mutation.isPending ? t('btnIsPending') : t('btnSubmit')}
				</Button>
			</div>

			{mutation.isSuccess && (
				<CardUrlShorted url={mutation.data?.data.shortCode} />
			)}

			{mutation.isError && (
				<span className='text-tertiary-light mt-2'>
					{t('errorRequest')}
				</span>
			)}
			{error && (
				<span className='text-tertiary-light mt-2'>
					{t('errorLinkInvalid')}
				</span>
			)}
		</form>
	);
};

export default ShortenerForm;
