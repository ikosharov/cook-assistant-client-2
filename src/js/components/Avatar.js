import React from 'react'

const Avatar = ({ username, signOut }) => {
  return (
    <div>
      <h3>{username}</h3>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Avatar