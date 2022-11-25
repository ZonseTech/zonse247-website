import React from 'react';

export default function About() {
	return (
		<>
			{/* ======= About Section ======= */}
			<section id='about' className='about'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-6 order-1 order-lg-2'
							data-aos='zoom-in'
							data-aos-delay={150}>
							<img src='assets/img/about.jpg' className='img-fluid' alt='' />
						</div>
						<div
							className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'
							data-aos='fade-right'>
							<h3>Voluptatem dignissimos provident quasi corporis</h3>
							<p className='fst-italic'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<ul>
								<li>
									<i className='bi bi-check-circle' /> Ullamco laboris nisi ut
									aliquip ex ea commodo consequat.
								</li>
								<li>
									<i className='bi bi-check-circle' /> Duis aute irure dolor in
									reprehenderit in voluptate velit.
								</li>
								<li>
									<i className='bi bi-check-circle' /> Ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate trideta storacalaperda mastiro
									dolore eu fugiat nulla pariatur.
								</li>
							</ul>
							<a href='./' className='read-more'>
								Read More <i className='bi bi-long-arrow-right' />
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* End About Section */}
		</>
	);
}
