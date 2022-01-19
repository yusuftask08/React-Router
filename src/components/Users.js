import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(_ => setUsers(_.data, console.log('_.data', _.data)))
            .catch(err => console.log('err :>> ', err))
    }, [])

    return <div>
        User Page

        <div>
            <ul>
                {
                    users && users.map(y =>
                        <li key={y.id}>
                            <Link to={`/user/${y.id}`}> {y.name}</Link>
                        </li>
                    )
                }
            </ul>
        </div>

    </div>
}

export default User;
