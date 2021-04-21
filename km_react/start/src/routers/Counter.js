import React, {useState , useEffect} from 'react';

function Counter(){

    const [count, setCount] = useState(0);
    const [add, setAdd] = useState('');
   
    
    
    const onChangeHandler = (ev) =>{
        const { target: { value } } = ev;
        setAdd(value);
    };

    const increament = () => {
       
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    }

    const plus = () => {
        setCount(count + (add * 1));
        setAdd('');
    }

    useEffect(()=>{
        console.log(count);
    }, [count]);


    


    return(
        <div>
            <h1>Count: {count}</h1>
            <input type="text" value={add} onChange={onChangeHandler}  />
            <h3>{add}</h3>
            <button onClick={plus}>입력한 값 더하기</button>
            <button onClick={increament}>증가</button>
            <button onClick={minus}>감소</button>
        </div>
        
    );
}

export default Counter;