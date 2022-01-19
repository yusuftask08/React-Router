import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
function User() {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(_ => setUser(_.data, console.log('_.data', _.data)))
            .catch(err => console.log('err :>> ', err))
    }, [id])
    return <div>
        User Page {id}
        <div>
            <code> <strong> {!!user && JSON.stringify(user)}</strong> </code>
        </div>
        <div>
            <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1}) </Link>

        </div>
    </div>
}

export default User;
