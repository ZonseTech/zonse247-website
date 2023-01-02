import { useRouteError, useNavigate, Link } from 'react-router-dom';

import bgImage from '../assets/images/error-2.png';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowBack } from '@mui/icons-material';

const ErrorSection = styled('div')({
	display: 'block',
	justifyContent: 'center',
	alignItems: 'center',
	background: '#fff',
	overflow: 'hidden',
	textAlign: 'center',
});

export default function E404() {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'>
			<Grid item xs={3} sm={3} md={3} p={0} m={0}>
				<Container style={{ marginTop: '5%' }}>
					<ErrorSection m={4}>
						<Box
							component='img'
							sx={{
								height: 'auto',
								width: '70%',
								maxWidth: { xs: '100%', md: '100%' },
								borderStyle: 'none',
							}}
							alt='Something went wrong'
							src={bgImage}
						/>

						<Typography
							variant='h1'
							m={0}
							sx={{
								fontSize: {
									xs: '2rem',
									sm: '2rem',
									md: '10rem',
									lg: '5rem',
								},
								fontWeight: 500,
							}}>
							{error.status}
						</Typography>

						<Typography
							variant='subtitle1'
							mb={2}
							sx={{
								textTransform: 'capitalize',
								fontSize: '1.15rem',
								margin: '.575rem 0 .46rem',
							}}>
							{error.statusText || error.message}
						</Typography>

						<Button
							onClick={() => navigate(-1)}
							color='primary'
							component={Link}
							size='large'
							variant='outlined'
							mb={4}
							startIcon={<ArrowBack />}>
							Go Back
						</Button>
					</ErrorSection>
				</Container>
			</Grid>
		</Grid>
	);
}
