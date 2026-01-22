import { Link } from 'lucide-react';
import DarkLightBtn from '../../ui/DarkLightBtn';
import GithubIcon from '../../ui/GithubIcon';
import LanguageButton from '../../ui/LanguageButton';

const Header = () => {
	return (
		<header className='flex text-secondary-light dark:text-secondary-dark justify-between px-6 py-4 border-b-2 border-[#0D0D0D] items-center'>
			<a
				href='#'
				className='flex items-center gap-1 text-2xl hover:text-black/80 dark:hover:text-white/80 transition-colors font-medium cursor-pointer'
			>
				<Link />
				<h1 className=''>Encurta</h1>
			</a>
			<div className='flex gap-4 items-center'>
				<DarkLightBtn />
				<a
					href='https://github.com/Sinvalluz/Encurta-web'
					target='_blank'
					rel='noreferrer'
				>
					<GithubIcon />
				</a>
				<LanguageButton />
			</div>
		</header>
	);
};

export default Header;
