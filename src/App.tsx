import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/common/Main';
import { RedirectPage } from './components/common/RedirectPage';
import { useTheme } from './contexts/ThemeContext';

function App() {
	const { darkMode, setDarkMode } = useTheme();

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		setDarkMode(theme === 'true');
	}, [setDarkMode]);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='bg-primary-light dark:bg-primary-dark min-h-screen transition'>
				<Header />

				<Routes>
					<Route
						path='/'
						element={<Main />}
					/>
					<Route
						path='/:code'
						element={<RedirectPage />}
					/>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
