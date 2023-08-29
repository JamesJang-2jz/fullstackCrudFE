import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

// navigate only needed with onclick, see line 30
// const navigate = useNavigate();
// const handleClick= () => {
//   navigate("/adduser");
// }


  return (
    <div> James Jang's CRUD <a href= "https://github.com/JamesJang-2jz"> GitHub</a>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Full Stack Crud App</a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className='btn btn-outline-light' to="/addUser">Add User</Link>
    {/* <button onClick={handleClick} className='btn btn-outline-light'>Add User</button>   */}
    {/*use with navigate. Link will take user to another page without full page reload */}
  </div>
</nav>
        
    </div>
  )
}
