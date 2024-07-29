import React from 'react'
import { FaPlus, FaDownload, FaUpload } from 'react-icons/fa'
import MainLayout from '../../layouts/mainLayout'

const Index = () => {
  return (
    <MainLayout>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-center">
        <div className="flex flex-row justify-between md:justify-between lg:justify-start xl:justify-start gap-3 w-full">
          <button className="flex text-xs bg-black hover:bg-black text-white font-bold p-3 rounded-lg items-center">
            <FaPlus className="" />
            <span className="ml-3">Add New</span>
          </button>
          <div className="gap-3 flex flex-row items-center">
            <button className="flex text-xs bg-gray-300 hover:bg-gray-300 text-black font-bold p-3 rounded-lg items-center">
              <FaDownload className="" />
              <span className="ml-3">Export</span>
            </button>
            <button className="flex text-xs bg-gray-300 hover:bg-gray-300 text-black font-bold p-3 rounded-lg items-center">
              <FaUpload className="" />
              <span className="ml-3">Import</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-5">
          <input type="text" placeholder="Search" className="border-2 w-full h-10 border-gray-300 p-2 rounded-lg" />
          <select className="border-2 border-gray-300 px-5 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-10 rounded-lg">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>
    </MainLayout>
  )
}

export default Index