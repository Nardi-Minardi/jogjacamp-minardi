import React from 'react'
import Slider from '../../components/elements/slider'
import Card from '../../components/elements/card'
import MainLayout from '../../layouts/mainLayout'
import { dataCard1 } from '../../libs/data'

const Index = () => {
  return (
    <MainLayout>
      <Slider />
      <section className="w-full pt-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {dataCard1.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </MainLayout>
  )
}
export default Index