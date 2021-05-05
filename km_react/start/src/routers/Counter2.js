import React, { useReducer, useState } from 'react';

export const INCREAMENT = 'INCREAMENT';
export const DECREAMENT = 'DECREAMENT';
export const INCREAMENT_CUSTOM = 'INCREAMENT_CUSTOM';

export const increase = () => ({type: 'INCREAMENT'});




const CounterReducer = (state, action) => {
    switch(action.type){
        case INCREAMENT:{
            return state + 1;
        }
        case 'DECREAMENT':{
            return state - 1;
        }
        case INCREAMENT_CUSTOM:{
            return state + action.plus * 1;           
        }
        default:{
            return state;
        }
    }
}




function Counter2(){
    // const [count , setCount] = useState(0);

    const [add , setAdd] = useState('');

    const onChangeHandler = (ev) => {
        const { target: {value} } = ev;
        setAdd(value);
    }
   
    
    const [count, dispatch] = useReducer(CounterReducer, 0);
    const increament = () => {
        dispatch(increase());
    };
    const decreament = () =>{
        dispatch({type: 'DECREAMENT'});
    };

    const increamentCustom = () =>{
        dispatch({type: INCREAMENT_CUSTOM , plus: add });
    };


    // const countUp = () => {
    //     setCount(count + 1) ;
    // };
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={decreament}>감소</button>
            <button onClick={increament}>증가</button>
            <div>
            <input type ="text" value={add} placeholder="값을 입력하세요" onChange={onChangeHandler}></input>
            <button onClick={increamentCustom}>임의값증가</button>
            </div>

        </div>
    ) 
}

export default Counter2;