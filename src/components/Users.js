import React, { useState, useEffect, useRef } from "react";
import { saveUser, getUsers, deleteUser, userInformation } from "../api/Request";

const Users = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");

    const nameInput = useRef(null);

    let [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email: email,
            dni: dni
        }
        saveUser(user)
            .then((response) =>{
                getUsersData()
            }).catch((error) => {
                console.log(error)
            })
    }

    const getUsersData = () => {
        getUsers()
            .then((response) => {
                setUsers(response.data)
            })
    }

    const removeUser = (id) => {
        deleteUser(id)
            .then((response) => {
                getUsersData()
            })
            
    }

    const seeUser = (id) => {
        userInformation(id)
            .then((response) => {
                console.log(response.data)
            })
    }

    useEffect(() => {
        getUsersData()
    }, [])

    return(
        <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Name"
              ref={nameInput}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              placeholder="User's Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setDni(e.target.value)}
              value={dni}
              className="form-control"
              placeholder="User's Dni"
            />
          </div>
          <button className="btn btn-primary btn-block">
            Create
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button 
                    className="btn btn-info btn-sm btn-block"
                    onClick={() => seeUser(user._id)}  >
                    See
                  </button>  
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => removeUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;