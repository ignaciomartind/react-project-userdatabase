import axios from "axios";
import React, {useState, useEffect} from 'react';


function DataFetching(){

    const [users, setUsers] = useState([])

    function bringData(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res);
            setUsers(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    function eraseData(){
        setUsers([])
    }
    return(<div className="data-fetching">

        <div className="btn-cont" style={{background: 'white'}}>
            <button className="btn btn1" onClick={bringData}>Bring data</button>
            <button className="btn btn2" onClick={eraseData}>Erase data</button>
        </div>

        {users.map(user => <div className="user" key={user.id}>
            <li className="user-id"><span className="user-list-category">ID:</span>{user.id}</li>
            <li className="user-name"><span className="user-list-category">Name:</span> {user.name}</li>
            <li className="user-email"><span className="user-list-category">Email:</span> {user.email}</li>
            </div>)}

    </div>)
}

export default DataFetching;