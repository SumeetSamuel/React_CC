import React from 'react';
import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar'
import AddCourse from './components/AddCourse';

class App extends React.Component {

  state ={ 
    heading:"My Application",
    courseDetails:[
      {id:1,title:'React',details: 'bext ui library',instructor: 'Jack'},
      {id:2,title:'React',details: 'bext ui library',instructor: 'Jack'},
      {id:3,title:'React',details: 'bext ui library',instructor: 'Jack'},
      {id:4,title:'React1',details: 'bext ui library',instructor: 'Jack'},
      {id:5,title:'React1',details: 'bext ui library',instructor: 'Jack'},
    ]
  }
    
  addCourse = (course) =>{
   console.log('inside app.js',course);
   course.id=Math.floor(Math.random()*100);
   let courseDetails=[...this.state.courseDetails,course];
   course.log('new array ',courseDetails);
   //render happens
   this.setState({
     //courseDetails: courseDetails //below one same with this one//updating keeping the
     courseDetails
     //courseDetails: this.state.courseDetails.push(course)//shouldnt use this as this will change the existing state details(original array of coursedetail obj)
     //push return index
   })
  }

  //state={title:'React',details: 'bext ui library',instructor: 'Jack'}
//we can change things in state in console in component option
//state is internally a obj
  render(){

  return (
    <div className="App">
    <h1>Course Page</h1>
    {/* <Display title={this.state.title}  details={this.state.details} instructor={this.state.instructor}/> */}
    {/* <Display title={this.state.courseDetails[0].title}  details={this.state.courseDetails[0].details} instructor={this.state.courseDetails[0].instructor}/> */}
    <Navbar heading={this.state.heading}></Navbar>
    <Display courseDetails= {this.state.courseDetails}/>
    {/* <Display/> */}
    <AddCourse addCourse={this.addCourse}/>
    </div>
  );
 }
}

export default App;
/*
create virtual dom in its own memory ,whatever changes it will first render in virtual dom there react will identity the change done in which part and that part is updated in real DOM.
*/

/*
//framework

//react is library
//library 

//Coding principle
//DRY = do not repeat urself
//single responsibility principle
//standard naming
//comments

//babel = js preprocessor
//jsx = js xml   
//components = fn n classess
//component = fn first letter should be capital letter reason jsx can clashed with html n html doesnt stand with capital letter
//we can use html directly in react using  React.createElement(  );
//react = top down approach library
//Props = properties
*/