import React from 'react'

const Loader = ({ loading, children }) => {
  return (
    <div>
      { loading && <label>Loading...</label> }
      { children }
    </div>
  )
}

export default Loader