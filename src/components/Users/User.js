import {Link, Switch, Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function  User({item}){
    return (
        <div>
            {item.first_name} - <Link to={{pathname:'/user/' + item.id}}>Details</Link>
        </div>
    )
}