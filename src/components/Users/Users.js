import {useEffect, useState} from 'react'
import User from "./User";
import UserDetails from "./UserDetails";
export default function Users() {
  let [users, setUsers] = useState([])
  let page = 1
  let next = () => {
    page++
    console.log(page);
  }
  let before = () =>{
    page--
    console.log(page);
  }
useEffect(()=>{
fetch('https://reqres.in/api/users?page='+ page).then(value => value.json()).then(value => {
  setUsers(value.data)
})
},[])
  return (
    <div>
      {users.map(value => <User item={value}/>)}
      <button onClick={next}>Next</button> <button onClick={before}>Before</button>
    </div>
  );
}
