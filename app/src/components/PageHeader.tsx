import React, { Dispatch, SetStateAction, createElement, useContext, useState, } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
import { BiMenu, BiMoon, BiSun, BiXCircle } from 'react-icons/bi';

const { Header } = Layout

interface Iprops {
	collapsed: any;
	setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const PageHeader = (props: Iprops) => {
	const { mode, toggleMode } = useContext(ThemeContext);
	const [isMenuHidden, setIsMenuHidden] = useState(true);

	return (
		<Header className="border-b-2 h-11 bg-white border-b-cool-gray-100 p-0 dark:bg-gray-900 sticky top-0 z-10 w-full">
			<nav className="flex flex-wrap items-center justify-between w-full text-lg text-gray-700 bg-white ">

				{createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
					className: 'text-base cursor-pointer transition-colors duration-300 hover:text-blue-500 ml-2',
					onClick: () => props.setCollapsed(!props.collapsed),
				})}

				{
					createElement(isMenuHidden ? BiMenu : BiXCircle, {
						className: "h-6 w-6 cursor-pointer md:hidden block",
						onClick: () => setIsMenuHidden(!isMenuHidden),
					})
				}

				<div className={`${isMenuHidden ? 'hidden' : ''} w-full md:flex md:items-center md:w-auto`}>
					<ul className="pt-0 text-base text-gray-700 md:flex md:justify-between md:pt-0">
						<li className='md:p-4 py-2 block hover:text-blue-500'>
							<button
								className="align-middle rounded-md focus:outline-none focus:shadow-outline-cyan"
								onClick={toggleMode}
							>
								{mode === "dark" ? (
									<BiSun
										className="w-4 h-4"
										aria-hidden="true"
									/>
								) : (
									<BiMoon
										className="w-4 h-4"
										aria-hidden="true"
									/>
								)}
							</button>
						</li>
						<li className='md:p-4 py-1 block hover:text-blue-500 text-blue-500'>
							<button
								className="rounded-navl focus:shadow-outline-cyan focus:outline-none"
							>
								<Avatar src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" />
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</Header>
	)
}

export default PageHeader