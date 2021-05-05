import React, { useReducer, useState } from 'react';

// 일의 정의, Action
export const INCREAMENT = 'INCREAMENT';
export const DECREAMENT = 'DECREAMENT';
export const increase = () => ({ type: INCREAMENT });

// 일을 처리하는 것, Reducer 
// OEM Original Equipment Manufacturing
const CounterReducer = (state, action) => {
	switch(action.type) {
		case INCREAMENT: {
			return state + 1;
		}
		case DECREAMENT: {
			// console.log(action.add);
			return state - action.add;
		}
		default: {
			return state;
		}
	}
};

function Counter2() {
	// const [count, setCount] = useState(0);
	const [count, dispatch] = useReducer(CounterReducer, 0);

	const increament = () => {
		dispatch(increase());
	};
	
	const decreament = () => {
		dispatch({ type: DECREAMENT, add: 10 });
	};

	const increamentCustom = () => {

	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={decreament}>감소</button>
			<button onClick={increament}>증가</button>
			<div>
				<input type="text" placeholder="값을 입력하세요" />
				<button onClick={increamentCustom}>임의값증가</button>
			</div>
		</div>
	);
}

export default Counter2;

// 1. 목표: 카운트를 올린다
// 2. 카운트에 사용할 것.... useState처리.. 초기값 0
// 3. 버튼을 누른다. 
// 4. 증가 함수 만들어준다. 
// 5. 3과 4를 연동한다.
// 6. 4에서 만든 함수에서 useState에 있는 두번째 인자를 이용해 count를 증가한다.
// 7. count를 출력한다.