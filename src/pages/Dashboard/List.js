import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

function List({users,handleEdit,handleDelete}) {
    const List = () => {
        const [students, setStudents] = useState([]);
       
        useEffect(() => {
         async function getAllStudent() {
          try {
           const students = await axios.get("http://localhost:3335/user")
           // console.log(students.data);
           setStudents(students.data);
          } catch (error) {
           console.log("Something is Wrong");
          }
         }
         getAllStudent();
        }, [])
    const handleDelete = async id => {
        await axios.delete(`http://localhost:3335/user/${id}`);
        var newstudent = students.filter((item) => {
         // console.log(item);
         return item.id !== id;
        })
        setStudents(newstudent);
       }
  return (
    <div className='contain-table'>
        <table className='striped-table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>date of birth</th>
                    <th>city </th>
                    <th>mobile</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                        users.map((user, i) => (
                            <tr key={user.id}>
                                <td>{i + 1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.dob}</td>
                                <td>{user.city}</td>
                                <td>{user.mobile} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No User</td>
                        </tr>
                    )}
            </tbody>
        </table>
        
    </div>
  )
}
}

export default List;