import React, { useEffect, useState } from 'react';

// DATABASE에서 받아온 값
const PRICE = 3500;
const LIMIT = 30000;
const FEE = 2500;

function Counter() {
	const [count, setCount] = useState(0);
	const [add, setAdd] = useState('');
	const [fee, setFee] = useState(FEE);

	const onChangeHandler = (ev) => {
		// const value = ev.target.value;
		const { target: { value } } = ev;
		setAdd(value);
	};

	const comma = (number) => {
		return new Intl.NumberFormat().format(number);
	};

	const increament = () => {
		setCount(count + 1);
	};

	const decreament = () => {
		setCount(count - 1);
	};

	const addCustom = () => {
		setCount(add * 1 + count);
		setAdd('');
	};

	useEffect(() => {
		if (count * PRICE < LIMIT) {
			setFee(FEE);
		} else {
			setFee(0);
		}
	}, [count]);
	
	return (
		<div>
			{/* <input type="text" value={add} onChange={onChangeHandler} />
			<button onClick={addCustom}>입력한 값 더하기</button>
			<h3>{add}</h3> */}
			<div>
				<button onClick={decreament}>감소</button>
				<button onClick={increament}>증가</button>
			</div>
			<h1>1개 가격: {comma(PRICE)}원</h1>
			<h1>수량: {count}</h1>
			<h1>배송료: {comma(fee)}원</h1>
			<h1>TOTAL: {comma(count * PRICE + fee)}원</h1>
		</div>
	);
}

export default Counter;