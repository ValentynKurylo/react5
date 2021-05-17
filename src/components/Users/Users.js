import {useEffect, useState} from 'react'
import User from "./User";
import UserDetails from "./UserDetails";
export default function Users() {
  let [users, setUsers] = useState([])
  let [page=1, setPage] = useState()
  let page1 = () => {
    setPage(page = 1)
    //setPage(page)
    console.log(page);
  }
  let page2= () =>{
    setPage(page=2)
    console.log(page);
  }
  useEffect(()=>{
fetch('https://reqres.in/api/users?page='+ page).then(value => value.json()).then(value => {
  setUsers(value.data)
})
},[page])
  return (
    <div>
      {users.map(value => <User item={value}/>)}
      <button onClick={page1}>page = 1</button> <button onClick={page2}>page = 2</button>
    </div>
  );
}
