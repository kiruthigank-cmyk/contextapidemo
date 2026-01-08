import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
function Profile() {
    const { name } = useContext(LoginContext)
  return (
    <div>
      <h2>This is Profile Page</h2>
      <h2>Welcome!🙏🤝 {name} </h2>
    </div>
  )
}
export default Profile
