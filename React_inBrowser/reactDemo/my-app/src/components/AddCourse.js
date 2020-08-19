import React, { Component } from 'react'
import './addCourse.css';
//prop is auto pass in class comp
//to pass data from child comp(class comp)  to parent parent . ythis file is ex.
class AddCourse extends Component {
    state={
          title:"",
          details:"",
          instructor:""
    }

    
    changeHandler=(event)=>{
        //console.log(event.target.id);
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value,
        })

    }//if arrow fn  is there ,no need to bind
    //event bubbling
    //for form we use class comp
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log('inside AddCourse.js ',this.state);
        this.props.addCourse(this.state);
    }

    render() {

        return (
            <div className='add-form' onSubmit={this.handleSubmit} >
                <label htmlFor='title'>Course</label>
                <input type='text' id='title' placeholder='enetr course name' onChange={this.changeHandler}></input>

                <label htmlFor='details'>Details</label>
                <input type='text' id='details' placeholder='enetr details' onChange={this.changeHandler}></input>

                <label htmlFor='instructor'>Instructor</label>
                <input type='text' id='instructor' placeholder='enetr instructore name'onChange={this.changeHandler}></input>
                <input type='submit' value="AddCourse"></input>
            </div>
        )
    }
}

export default AddCourse
