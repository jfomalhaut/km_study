import React from 'react';
import { Link } from 'react-router-dom';

// 함수 옆으로 넘어오는 변수
// props => property
function Header() {
	return (
		<header>
			<ul>
				<li>
					<Link to="/home">To Home</Link>
				</li>
				<li>
					<Link to="/list">To List</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;