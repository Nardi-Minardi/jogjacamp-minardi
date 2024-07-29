import React from 'react'

const Loader = ({ message }) => {
  return (
    <div className="loader h-full min-h-screen w-full">
      <span className="spinner"></span>
    </div>
  )
}

export default Loader