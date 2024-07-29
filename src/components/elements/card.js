import React from 'react'
import moment from 'moment'
import 'moment/locale/id'

const Card = ({ item }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 max-h-64 gap-4 flex flex-col">
        <h5 className="text-xl font-bold">{item?.title}</h5>
        <p className="text-gray-500 text-justify">{item?.subtitle}</p>
        <p className="text-gray-500 text-left text-xs">last updated {moment(item?.updatedAt).fromNow()}</p>
      </div>
    </>
  )
}

export default Card