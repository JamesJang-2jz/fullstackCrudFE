import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import http from "../http-common";
import userdataService from '../services/userdata.service';
import { confirmAlert } from 'react-confirm-alert';

export default function Home() {

    const [users, setUsers] = useState([])


    useEffect(() => {
      loadUsers();
    }, [] );

    const loadUsers = async () => {
      const result = await userdataService.getAll();
      setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/crud/user/${id}`)
        loadUsers();
    }

    const confirmSubmit = (id, name) => {
        confirmAlert({
          title: 'Hit Yes to confirm',
          message: `You are about to delete user: ${name}. Are you sure?`,
          buttons: [
            {
              label:'Yes',
              onClick: () => deleteUser(id)
            },
            {
              label: 'No',
            }
          ]
        });
    }

  return (
  <div className='container'>
    <div className='py-4'>
    <table className="table border shadow">
      <thead>
        <tr>
         <th scope="col">result</th>
         <th scope="col">Name</th>
         <th scope="col">Username</th>
         <th scope="col">@Email</th>
         <th scope="col">Action</th>
       </tr>
      </thead>
        <tbody>
          {
              users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-primary mx-2 my-2' to={`/viewUser/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2 my-2'
                    to={`/editUser/${user.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2 my-2' data-toggle="modal" data-target="#exampleModal"
                    onClick={() => confirmSubmit(user.id, user.name)}>Delete</button>
                    
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  </div>
  )
}
