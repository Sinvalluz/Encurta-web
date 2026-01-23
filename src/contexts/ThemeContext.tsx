import {
	createContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useContext,
	useState,
} from 'react';

interface ThemeContextData {
	darkMode: boolean;
	toggleTheme: () => void;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextData>(
	{} as ThemeContextData,
);

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	function toggleTheme(): void {
		setDarkMode(!darkMode);
		localStorage.setItem('theme', String(!darkMode));
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
