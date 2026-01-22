import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/common/Main';
import { useTheme } from './contexts/ThemeContext';

function App() {
	const { darkMode } = useTheme();

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='bg-primary-light dark:bg-primary-dark min-h-screen transition'>
				<Header />
				<Footer />
				<Main />
			</div>
		</div>
	);
}

export default App;
