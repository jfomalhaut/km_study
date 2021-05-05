import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const CONFIRM_KEY = 'devU01TX0FVVEgyMDIxMDQyODIwMzYwMzExMTEwNzM=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';



function Address(){
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword2, setKeyword2] = useState('');

    const onChangeHandler = (ev) => {
        const {target: {value} } = ev;
        setKeyword(value);
    }

    const next = () =>{
        setCurrentPage(currentPage + 1);
    }
    const undo = () =>{
        setCurrentPage(currentPage - 1);
    }

    const search = () => {
        Axios.get(`${JUSO_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`).then(res => {
           const{ data: {results:{ common, juso} } } = res;
           setList(juso || []);
        })

    }



    const onSubmit = (ev) => {
        ev.preventDefault();
        setKeyword2(keyword);
        


    };


    useEffect(() =>{
        if(keyword2 !== ''){
            if(currentPage === 1){
                search();
            }
            else{
                setCurrentPage(1);
            }
        }
    },[keyword2])



    useEffect(() => {
        if(keyword2 !== ''){
            search();
        }
    },[currentPage]) 


    return(
        <div>
            <h1>Address Component</h1>
            <form onSubmit={onSubmit}>
                <input value={keyword} onChange={onChangeHandler} type="text" placeholder="주소를 입력하세요"></input>
                <button>검색</button>
                
                
            </form>
            <button onClick={undo}>이전</button>
            <button onClick={next}>다음</button>
            <ul>
                {list.map((item, index) => (
                    <li key={`ADDRESS${index}`}>{item.roadAddrPart1}</li>
                ))}
            </ul>
        </div>
    );
}

export default Address;