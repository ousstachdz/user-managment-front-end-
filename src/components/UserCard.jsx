import React from 'react'
import { Link } from 'react-router-dom'
import './style/UserCard.css'
export default function UserCard({ user }) {
  return (
    <div className='UserCard'>
      <Link to={`user/${user.id}`}>
        {user?.first_name} {user?.last_name}
      </Link>
    </div>
  )
}
