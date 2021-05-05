import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

function Scroll() {
	const [active, setActive] = useState(false);

	const onScrollHandler = () => {
		const { scrollY } = window;
		if (scrollY > 0) {
			// 떨어진 상태
			setActive(true);
		} else {
			// 붙은 상태
			setActive(false );
		}
	};

	// 처음 시작할 때 시작하는 함수. init()
	useEffect(() => {
		window.addEventListener('scroll', onScrollHandler);
		// 페이지가 랜더링되고 있기 때문에 이벤트 리스너는 계속 돌고 있다.
		// 따라서 다른 페이지로 넘어갈 때에는 이벤트 리스너를 종료해주는 코드가 필요하다.
		// 사용하는 이유: 퍼포먼스 때문에.
		return () => {
			window.removeEventListener('scroll', onScrollHandler);
		}
	}, []);
	
	return (
		<Container active={active}>
			{/* <header className={active ? 'active' : ''}> */}
			<header>
				<h1>Header</h1>
			</header>
			<main>
				<p>
					<h2>Hello</h2>
					<h2>Hello</h2>
					<h2>Hello</h2>
					<h2>Hello</h2>
					<h2>Hello</h2>
					<h2>Hello</h2>
				</p>
			</main>
		</Container>
	);
}

export default Scroll;

const activeStyles = css`
	background: #000;
	h1 {
		color: #fff;
	}
`;

const Container = styled.section`
	header {
		height: 100px;
		position: fixed;
		left: 0; top: 0;
		width: 100%;
		border-bottom: 1px solid #ddd;
		${'' /* background: ${props => props.active ? '#000' : '#fff'}; */}
		background: #fff;
		h1 {
			text-align: center;
			${'' /* color: ${props => props.active ? '#fff' : '#000'}; */}
			color: #000;
			line-height: 100px;
			font-size: 50px;
		}
		${props => props.active && activeStyles}
	}
	main {
		background: #f0f0f0;
		min-height: 200vh;
		padding-top: 100px;
		p {
			padding: 20px;
			h2 {
				font-size: 30px;
			}
		}
	}
`;
