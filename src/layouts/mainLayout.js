import React from 'react'
import Header from '../components/elements/header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {children}
      </div>
    </>
  )
}

export default MainLayout