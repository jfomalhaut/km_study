import React, { useEffect , useState } from 'react';
import styled, {css} from 'styled-components';

function Scroll(){

    const [active, setActive] = useState(false);

    const onScrollHandler = () => {
        const { scrollY } = window;
        if (scrollY > 0){
            setActive(true);
        }
        else{
            setActive(false);
        }
    };




    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);
        
        return() => {
            window.removeEventListener('scroll',onScrollHandler);
        }

    },[])

    return(
    <Container active = {active}>
        {/* <header className={active ? 'active' : ""}> */}
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
    )
}

export default Scroll;

const activeStyles = css`
    background: #000;
    h1{
        color: #fff;
    }
`;

const Container = styled.section`
    header{
        height: 100px;
        position: fixed;
        left: 0; top: 0;
        width: 100%;
        border-bottom: 1px solid #ddd;
        ${'' /* background: ${props => props.active ? '#000' : '#fff;'}; */}
        background: #fff;
        h1{
            text-align: center;
            ${'' /* color: ${props => props.active ? '#fff' : '#000'}; */}
            color: #000;
            line-height:100px;
            font-size: 50px;
        }
        ${props => props.active && activeStyles}
    }
    main{
        background: #f0f0f0;
        min-height: 200vh;
        padding-top: 100px;
        p{
            padding:20px;
            h2{
                font-size: 30px;
            }
        }
    }
`;