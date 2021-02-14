import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/actions/usersActions';
import User from './User/User';
import Loader from "react-loader-spinner";



function UsersList() { 
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    useEffect(() => {
       dispatch(fetchUsers([]))
    }, [])
    return (
        <div>
            {/* <h1>Welcome</h1> */}
         {users.loading ? <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> : ''}
         {users.users ? users.users.map((user) => (
            <User user={user} key={user.id} />
         )): null}
        </div>
    );
}
export default UsersList; 