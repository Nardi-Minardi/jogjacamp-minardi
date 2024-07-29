import React from 'react'

const Header = (props) => {
  return (
    <div className="flex py-2 flex-row justify-between border-b-2 border-[#f1f1f1] items-center px-4 sm:px-6 lg:px-[10rem] xl:px-[10rem]">
      <a href="/" className="text-black text-2xl font-bold">Frontend</a>
      {/* <p className="text-black font-bold">User</p> */}
    </div>
  )
}

export default Header