import React from 'react'
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit({users,selectedUser,setUsers,setIsEditing}) {
    const id = selectedUser.id;
    const [firstName, setFirstName] = useState(selectedUser.firstName);
    const [lastName, setLastName] = useState(selectedUser.lastName);
    const [dob, setDob] = useState(selectedUser.dob);
    const [city, setCity] = useState(selectedUser.city);
    const [mobile, setMobile] = useState(selectedUser.mobile);
    const [student,setStudent]=useState();
    const history= useNavigate();
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !dob || !city || !mobile) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        const user = {
            id,
            firstName,
            lastName,
            dob,
            city,
            mobile
        };
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1, user);
                break;
            }
        }
        setUsers(users);
        setIsEditing(false);
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${user.firstName} ${user.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
         await axios.put(`http://localhost:3335/user${id}`, student)
         history.push("/")
        } catch (error) {
         console.log("Something is Wrong");
        }
       
  return (
    <div>
        <form onSubmit={handleUpdate}>
                <h1>Edit User</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="dob">Date of birth</label>
                <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <label htmlFor="mobile">Mobile</label>
                <input
                    id="mobile"
                    type="number"
                    name="mobile"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" onClick={(e)=> onFormSubmit(e)} />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
    </div>
  )
}
}

export default Edit;