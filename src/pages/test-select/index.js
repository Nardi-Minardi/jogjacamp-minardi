import React from 'react'
import axios from 'axios'
import MainLayout from '../../layouts/mainLayout'
import Sidebar from '../../components/elements/sidebar'
import Card from '../../components/elements/card'
import { useQuery } from 'react-query'
import Loader from '../../components/elements/loader'
import { dataCard2 } from '../../libs/data'

const Index = () => {

  const getProvinsi = async () => {
    const res = await axios.get('http://apikab.jcamp.pt/public/api/v1/reference/provinces', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res
  }

  const { data: dataProvinsi, isLoading } = useQuery('provinsi', getProvinsi)

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row xl:flex-row gap-5">
        {isLoading && <Loader />}
        <Sidebar dataProvinsi={dataProvinsi?.data} />
        <div className="w-full flex flex-col gap-5">
          {dataCard2.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Index