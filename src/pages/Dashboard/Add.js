import React from 'react'
import { useState,useEffect,useRef } from 'react';
import Swal from 'sweetalert2';
import Dashboard from '.';
import axios from 'axios';

function Add({users,setUsers,setIsAdding}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('');
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        dob:"",
        city:"",
        mobile:"",
       });
       const [status, setStatus] = useState();   

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !dob || !city || !mobile) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        const id = users.length + 1;
        const newUser = {
            id,
            firstname:firstName,
            lastname:lastName,
            dob,
            city,
            mobile
        }
        users.push(newUser);
        setUsers(users);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3335/user`, user)
            setStatus(true);
        } catch (error) {
         console.log("Something is Wrong in Add");
        }
       }
       if (status) {
        return <Dashboard/>
       }
  return (
    <div className='small-container'>
        <form onSubmit={handleAdd}>
            <h1>Add new user</h1>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                ref={textInput}
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
                <input type="submit" value="Add" onClick={e => onSubmit(user.id)}/>
                <input
                    style={{ marginLeft: '12px' }}
                    className="muted-button"
                    type="button"
                    value="Cancel"
                    onClick={() => setIsAdding(false)}
                />
            </div>


        </form>
    </div>
  );
}

export default Add;