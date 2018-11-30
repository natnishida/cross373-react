import React from 'react'
import CarrosselDesk from '../../components/CarrosselDesk/CarrosselDesk'
import CarrosselMob from '../../components/CarrosselMob/CarrosselMob'
import Ancora from '../../components/Ancora/Ancora'
import Divisorias from '../../components/Divisorias/Divisorias'
import './Home.css'

function Home() {
  return (
    <main className="home">
        <CarrosselDesk />
        <CarrosselMob />
        <Divisorias />
        <Ancora id="sobrenos" textoh2="Cross 373: Aqui tem resultado!" textoh3="tesste"/>
    </main>
  )
}

export default Home
