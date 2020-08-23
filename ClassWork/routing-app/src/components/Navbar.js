import React from 'react'
import { Link , NavLink, withRouter} from 'react-router-dom';//Link behaves exactly like anchor tag written in capibality of not making that complete request
//Link tag is written above anchor tag(in anchar tag to prevent page reload onsubmit form we use preventDefault() so internally this fn is their in Link tag which makes it not to reload just upadte the component by making request to that comp and that comp load sin the app.js .this makes our app single page)
//Navlink is internally a Link only diff is NavLink internally adds class= "active" like active button
//routes
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper #00b0ff light-blue accent-3">
                <a href='/' className="brand-logo center">Brand Name</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>

                        {/* <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li> */}
                    </ul>
            
            </div>
        </nav>
    )
}

export default withRouter(Navbar);//without withRouter object will be empty in console.log  , with 'withRouter' object values will be assign to navbar i.e routing funcationality are provided to it
/*
navigate from onepage to another

 npm install react-router-dom --no-fund


 window.loaction
 window.location.reload();
  window.location.replace();
 window.location.href="http://www.google.com"
window.location.href="http://loacalhost:3000/"

there is <HashRouter> for legacy browser but we will use <BrowserRoute> it is better
*/