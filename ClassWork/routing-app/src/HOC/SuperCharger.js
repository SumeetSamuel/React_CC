//prospective comp as prop
import React from 'react';

const SuperCharger = (ProspectiveComponent) =>{
    const color = ['red','blue','green','yellow','purple','violet'];
    const randomColor = color[Math.floor(Math.random()*color.length)];

    //red-text - materialize

    const className = randomColor+'-text';

    return (props) =>{
        return(
            <div className={ className}>
                <ProspectiveComponent {...props}></ProspectiveComponent>
            </div>
        )
    }
}
export default SuperCharger;