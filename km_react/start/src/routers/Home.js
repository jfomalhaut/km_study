import React from 'react';

function Home(props){
    console.log(props);
    
    const toList = () => {
        props.history.push('/list');
    };

    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={toList}>List로</button>
        </div>
    );
}
export default Home;

