import React from 'react';

const SuperCharger1 = (ProspectiveComponent) =>{
    const color = ['red','blue','green','yellow','purple','violet'];
    const randomColor = color[Math.floor(Math.random()*color.length)];

    
    //background color
    const className = randomColor;

    return (props) =>{
        return(
            <div className={ className}>
                <ProspectiveComponent {...props}></ProspectiveComponent>
            </div>
        )
    }
}
export default SuperCharger1;