import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style/UserDetails.css'
export default function UserDetails() {
  const [user, setUser] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    await axios
      .get(`http://127.0.0.1:8000/users/get_user/${id}`)
      .then((response) => {
        setUser(response.data)
      })
  }
  return user != null ? (
    <div className='user-details'>
      <h1>
        FirstName : <span>{user?.first_name} </span>
      </h1>
      <h1>
        LastName : <span>{user?.last_name} </span>
      </h1>
      <h1>
        Email : <span>{user?.email} </span>
      </h1>
      <h1>
        Username : <span>{user?.username} </span>
      </h1>
      <h1>
        Is Active : <span>{user?.is_active ? 'True' : 'False'} </span>
      </h1>
      <h1>
        Is Staff : <span>{user?.is_staff ? 'True' : 'False'} </span>
      </h1>
      <h1>
        Hometown : <span>{user?.profile?.hometown} </span>
      </h1>
      <h1>
        Gander : <span>{user?.profile?.gander} </span>
      </h1>
      <h1>
        Age : <span>{user?.profile?.age} </span>
      </h1>
      <h1>
        Last Login :{' '}
        <span>{new Date(user?.last_login).toString().slice(0, 25)} </span>
      </h1>
      <h1>
        Date Joined :{' '}
        <span>{new Date(user?.date_joined).toString().slice(0, 25)} </span>
      </h1>
      <div className='btn-container'>
        <Link to={'/'} className='btn'>
          go back
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <h1 className='loading'>Loading ...</h1>
    </div>
  )
}
