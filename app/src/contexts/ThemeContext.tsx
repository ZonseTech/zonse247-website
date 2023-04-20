import React, {
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
	useMemo,
	MutableRefObject,
	createContext,
	Context
} from 'react';


function usePrevious(theme: any): string {
	const ref: MutableRefObject<string | undefined> = useRef<string | undefined>();

	useEffect(() => {
		if (theme) ref.current = theme;
	})

	return ref.current ?? '';
}

const useStorageTheme = ({ key }: { key: string; }): any => {
	const userPreference =
		!!window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;

	const [theme, setTheme] = useState<string | boolean>(localStorage.getItem(key) || userPreference);

	useEffect(() => {
		localStorage.setItem(key, String(theme));
	}, [theme, key]);

	return [theme, setTheme];
}

export const ThemeContext: Context<any> = createContext<string>('');

export function ThemeProvider(props: any): JSX.Element {
	const [theme, setTheme] = useStorageTheme({ key: 'theme' });

	const oldTheme: string = usePrevious(theme);

	useLayoutEffect(() => {
		document.documentElement.classList.remove(`theme-${oldTheme}`);
		document.documentElement.classList.add(`theme-${theme}`);
	}, [theme, oldTheme]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const toggleTheme = (): void => {
		if (theme === 'light') setTheme('dark');
		else setTheme('light');
	}


	console.log('====================================');
	console.log(theme);
	console.log('====================================');

	const value = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme, toggleTheme]
	);

	return (
		<ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
	);
}
