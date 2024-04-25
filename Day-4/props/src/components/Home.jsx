import React from 'react'
import Card from './Card'

const Home = () => {
    let people=[
        {
            name:"Tisha",
            age:"20",
            learning:"react"
        },{
            name:"Priyanka",
            age:"22",
            learning:"javascript"
        },
        {
            name:"Prachi",
            age:"21",
            learning:"tailwind-css"
        }
    ]
  return (
    <div>
        {
            people.map((data,index) => (
                <Card key={index} {...data} />
            ))
        }
    </div>
  )
}

export default Home
