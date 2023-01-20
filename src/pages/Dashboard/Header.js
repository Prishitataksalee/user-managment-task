import React from 'react'

function Header({ setIsAdding }) {
  return (
    <div>
        <header>
            <h2>User Management System</h2>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add User</button>
            </div>
        </header>
    </div>
  )
}

export default Header;