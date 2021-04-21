import React, { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	const [add, setAdd] = useState('');

	const onChangeHandler = (ev) => {
		// const value = ev.target.value;
		const { target: { value } } = ev;
		setAdd(value);
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
		console.log(count);
	}, [count]);
	
	return (
		<div>
			<h1>Count: {count}</h1>
			<input type="text" value={add} onChange={onChangeHandler} />
			<h3>{add}</h3>
			<button onClick={addCustom}>입력한 값 더하기</button>
			<button onClick={decreament}>감소</button>
			<button onClick={increament}>증가</button>
		</div>
	);
}

export default Counter;