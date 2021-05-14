import {useEffect, useState} from 'react'
import User from "./User";
export default function Users() {
  let [users, setUsers] = useState([])
useEffect(()=>{
fetch('https://reqres.in/').then(value => value.json()).then(value => {
  setUsers([...value])
})
},[])
  console.log(users);
  return (
    <div>
      {users.map(value => <User item={value}/>)}
    </div>
  );
}
