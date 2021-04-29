import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const CONFIRM_KEY = 'devU01TX0FVVEgyMDIxMDQyODIwNDkxMzExMTEwNzQ=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

function Address() {
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const transPaylaod = (obj) => {
		return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const search = () => {
		console.log('#####################');
		console.log('search!!');
		console.log('#####################');
		Axios.get(`${JUSO_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`).then(res => {
			const { data: { results: { common, juso } } } = res;
			setList(juso || []);
		});
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword); // 무조건 1페이지로 가야..
		
		// const payload = {
		// 	confirm: CONFIRM_KEY,
		// 	currentPage: 1,
		// 	countPerPage: 10,
		// 	resultType: 'json',
		// 	keyword
		// };

		// const payloadURL = transPaylaod(payload);

		// Axios.get(`${JUSO_URL}?${payloadURL}`).then()
	};

	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	return (
		<div>
			<h1>Address Component</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} type="text" placeholder="주소를 입력하세요" />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={`ADDRESS${index}`}>{item.roadAddrPart1}</li>
				))}
			</ul>
			<div>
				<button>이전</button>
				<h3>현재: {currentPage}</h3>
				<button onClick={next}>다음</button>
			</div>
		</div>
	);
}

export default Address;
