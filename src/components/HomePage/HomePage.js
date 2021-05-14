import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Users from "../Users/Users";
import UserDetails from "../Users/UserDetails";
function HomePage() {
    return (
       <Router>
           <div>
               <div><Link to={'/'}>Home Page</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
           </div>
           <Switch>
               <Route exact={true} path={'/'} render={()=>{
                   return <h3>Home Page</h3>
               }}/>
               <Route path={'/users'} component={Users}/>
               <Route path={'/user/:id'} component={UserDetails}/>
           </Switch>
       </Router>
    )
}

export default HomePage
