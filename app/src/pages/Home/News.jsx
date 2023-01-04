import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BlogSection = styled.section(css`
		article {
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
			padding: 30px;
			height: 100%;
			border-radius: 10px;
			overflow: hidden;
		}
		.post-img {
			max-height: 240px;
			margin: -30px -30px 15px -30px;
			overflow: hidden;
		}
		.post-category {
			font-size: 16px;
			color: #555555;
			margin-bottom: 10px;
		}
		.title {
			font-size: 22px;
			font-weight: 700;
			padding: 0;
			margin: 0 0 20px 0;
			a {
				color: var(--color-default);
				transition: 0.3s;
				&:hover {
					color: var(--color-primary);
				}
			}
		}
		.post-author-img {
			width: 50px;
			border-radius: 50%;
			margin-right: 15px;
		}
		.post-author-list {
			font-weight: 600;
			margin-bottom: 5px;
		}
		.post-date {
			font-size: 14px;
			color: #3c3c3c;
			margin-bottom: 0;
		}
	`),
	PostsList = styled(Row)``,
	BlogPagination = styled.div(css`
		margin-top: 30px;
		color: #555555;
		ul {
			display: flex;
			padding: 0;
			margin: 0;
			list-style: none;
		}
		li {
			margin: 0 5px;
			transition: 0.3s;
			border-radius: 10px;
			a {
				color: var(--color-default);
				padding: 7px 16px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-decoration: none;
			}

			&:hover {
				background: var(--color-primary);
				color: #fff;
				a {
					color: var(--color-white);
				}
			}
		}

		li.active {
			background: var(--color-primary);
			color: #fff;

			a {
				color: var(--color-white);
			}
		}
	`);

export default function News() {
	return (
		<BlogSection>
			<Container>
				<div className='section-title'>
					<h2>{'News'}</h2>
				</div>
				<PostsList className='gy-4'>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-1.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Politics</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Dolorum optio tempore voluptas dignissimos
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Maria Doe</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Jan 1, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-2.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Sports</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Nisi magni odit consequatur autem nulla dolorem
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author-2.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Allisa Mayer</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Jun 5, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-3.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Entertainment</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Possimus soluta ut id suscipit ea ut in quo quia et soluta
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author-3.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Mark Dower</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Jun 22, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-4.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Sports</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Non rem rerum nam cum quo minus olor distincti
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author-4.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Lisa Neymar</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Jun 30, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-5.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Politics</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Accusamus quaerat aliquam qui debitis facilis consequatur
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author-5.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Denis Peterson</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Jan 30, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className='col-xl-4 col-md-6'>
						<article>
							<div className='post-img'>
								{' '}
								<img
									src='assets/img/blog/blog-6.jpg'
									alt=''
									className='img-fluid'
								/>
							</div>
							<p className='post-category'>Entertainment</p>
							<h2 className='title'>
								{' '}
								<Link to='blog-details.html'>
									Distinctio provident quibusdam numquam aperiam aut
								</Link>
							</h2>
							<div className='d-flex align-items-center'>
								{' '}
								<img
									src='assets/img/blog/blog-author-6.jpg'
									alt=''
									className='img-fluid post-author-img flex-shrink-0'
								/>
								<div className='post-meta'>
									<p className='post-author-list'>Mika Lendon</p>
									<p className='post-date'>
										{' '}
										<time dateTime='2022-01-01'>Feb 14, 2022</time>
									</p>
								</div>
							</div>
						</article>
					</div>
				</PostsList>
				<BlogPagination>
					<ul className='justify-content-center'>
						<li>
							<Link to='#'>1</Link>
						</li>
						<li className='active'>
							<Link to='#'>2</Link>
						</li>
						<li>
							<Link to='#'>3</Link>
						</li>
					</ul>
				</BlogPagination>
			</Container>
		</BlogSection>
	);
}
