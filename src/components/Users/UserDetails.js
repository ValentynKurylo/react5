import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function UserDetails() {
    let params = useParams()
    let [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://reqres.in/api/users/' + params.id).then(value => value.json()).then(value => {
            setUser(value.data)
        },[])
    })

    return (<div>
        {user.id} - {user.first_name} - {user.last_name} - {user.email}
    </div>)
}