import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../service/user';

export default function DashboardIndex() {

  const [users, serUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllUsers();
      serUsers(result)
    })()
  }, [])

  return (
    <div>
      <div className='users_dashboard'>
        <h1>Users</h1>
        <p>{users.length}</p>
      </div>
    </div>
  )
}
