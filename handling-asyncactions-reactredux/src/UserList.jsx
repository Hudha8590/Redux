import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "./redux/UserAction";
const UserList=()=>{
    const dispatch=useDispatch();
    const {loading,users,error}=useSelector(state=>state)

    useEffect(()=>{dispatch(fetchUsers())},[dispatch])
    
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  return (
    <div>
        <h2>Users List</h2>
        <ul>{users.map(user=>(<li key={user.id}>{user.name}({user.email})</li>))}</ul>
    </div>
  )
}
export default UserList