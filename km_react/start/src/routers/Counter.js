import React, {useState , useEffect} from 'react';

const PRICE = 3500;
const FEE = 2500;


function Counter(){

    const [count, setCount] = useState(0);
    const [add, setAdd] = useState('');
    const [fee, setfee] = useState(FEE);
    
   
    
    
    const onChangeHandler = (ev) =>{
        const { target: { value } } = ev;
        setAdd(value);
    };

    const comma = (number) => {
        return new Intl.NumberFormat().format(number);
    }


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
        console.log(count * PRICE + fee);
        if (count * PRICE < 30000){
            setfee(FEE);
        }
        else{
            setfee(0);
        }
    }, [count])


    


    return(
        <div>

            {/*
            <input type="text" value={add} onChange={onChangeHandler}  />
            <button onClick={plus}>입력한 값 더하기</button>
            <h3>{add}</h3>*/}
            <button onClick={increament}>증가</button>
            <button onClick={minus}>감소</button>
            <h1>1개 가격 : {comma(PRICE)}원</h1>
            <h1>수량: {count}</h1>
            
            <h1>배송료: {comma(fee)}원</h1>
            <h1>TOTAL: {comma(count * PRICE + fee)}원</h1>
            

        </div>
        
    );
}

export default Counter;