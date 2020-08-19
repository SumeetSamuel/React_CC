// //using fnc comp becose we dont chnage the state in
//we can pass state as props in fn comp
//its a pure comp , which will not change based on any data it will give out same results
import React from 'react';
import Loading from './Loading';
import './display.css';

const Display=(props) =>{
    // console.log(props);//whenever we use map then we need to mention key //courseList is array
    //condition rendering  {condition ? () : ()}
    const courseList= props.courseDetails.length ? props.courseDetails.map((element,index) =>{ 
        //obj destructings= key value pair id should be avaibale
        //const id= element.id // below id is wriiten in this way which is hetic 
        const {id,title,details,instructor}= element;
        return(
            <div className="course-card" key={id}>
            <h3>Course Name: {title}</h3>{/*h3 n p is adjcent element for adj elemt h3+p*/}
            <p>Details: {details}</p>
            <p>Instructor Name: {instructor}</p>
            </div>

        )
    }): (<Loading/>)
    console.log(courseList);
    return (
        <div className="course-display">
           {courseList}
           {/* {courseList}  repetative data is handled by react*/}
           
        </div>

    );
}

export default Display;