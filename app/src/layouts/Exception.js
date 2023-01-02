import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';



export default function Exception() {
	return (
		<ThemeProvider>
			<Outlet />
		</ThemeProvider>
	);
}