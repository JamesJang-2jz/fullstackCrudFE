import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate=useNavigate();

  const {id} = useParams();

  const [user, setUser] = useState({
    name:"",
    username:"",
    email:""
  })

  const{name, username, email} = user;

  const onInputChange=(e) => {
      setUser({...user,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    loadUser();
  }, []) 
/**the initial render runs any effects using useEffect 
 * without empty array, the component will think there are dependencies and continue reloading 
 * ie. without empty array, when you type into input component, it will keep reloading and your keystrokes will disappear
 * so without [], it will re-render whenever something changes.
 */

  const onSubmit = async (e)=> { //  async/await is a better/cleaner way to handle promises. it makes the asynchronous function pause until the promise is resolved. 
      e.preventDefault();
      await axios.put(`http://localhost:8080/crud/user/${id}`, user)
      navigate('/');
  }  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/crud/user/${id}`)
    setUser(result.data);
  }
 
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit User</h2>
            <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input type={'text'} className='form-control' placeholder='Enter your name' name='name' value={name} onChange={onInputChange}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Username
              </label>
              <input type={'text'} className='form-control' placeholder='Enter your username' name='username' value={username} onChange={onInputChange}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Email
              </label>
              <input type={'text'} className='form-control' placeholder='Enter your email' name='email' value={email} onChange={onInputChange}/>
            </div>   
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    )
}
