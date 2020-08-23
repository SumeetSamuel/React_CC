import React from 'react'
import SuperCharger1 from '../HOC/SuperCharger1';

const Home = (props) => {
    console.log(props);
    // props.history.goBack();
    // setTimeout(()=>{
    //     props.history.push('/contact');
    // },2000)
    return (
        <div className="center container">
            <h1>HomePage</h1>
            <p>Consequat ea enim nulla esse. Duis proident eiusmod sunt nulla quis nostrud aute in ex laborum nisi ad occaecat veniam. Anim elit ullamco esse non. Qui tempor irure deserunt sunt reprehenderit labore officia. Nisi minim ut occaecat mollit consequat amet. Pariatur elit ut ipsum ullamco commodo dolor excepteur laborum sunt quis duis.</p>
        </div>
    )
}

export default SuperCharger1(Home);
