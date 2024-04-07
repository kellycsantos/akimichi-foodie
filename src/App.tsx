import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import iconClock from './assets/icons/clock.svg'
import principalFood from './assets/images/principal-food.png'
import getMenu from './services/api'
import { baseUrl } from './services/api'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const links = [
    {
      link: '/',
      value: 'home'
    },
    {
      link: '/packages',
      value: 'packages'
    },
    {
      link: '/about-us',
      value: 'about us'
    },
    {
      link: '/contact',
      value: 'contact us'
    },
  ]

  interface IPratos {
    id: number,
    name: string,
    img: string,
    description: string,
    avaliacao: number
  }

  const [pratos, setPratos] = useState<IPratos[]>([])

  async function getPratos(){
    await axios.get(baseUrl + 'menu')
    .then(response => {
      setPratos(response.data.pratos)
      console.log(response.data.pratos)})
  }

  useEffect(() => {
    getPratos()
  }, []);


  return (
    <div className='App'>
      <section className='home'>
        <Header links={links} />
        <div className='introduction'>
          <div className='text'>
            <h1>Your favourite food delivery hot $ fresh</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ullam officia, eos amet sint voluptates odit nemo provident fuga beatae.</p>
            <Button variant='pill' value='order now' />
          </div>
          <div>
            <img src={principalFood} />
          </div>
        </div>
      </section>
       <section className='info'>
      

       </section>
       <section className='pratos'>
      {
        pratos.map((prato) => 
        <Card key={prato.id} variant='product clickable' productCard 
        icon={prato.img} title={prato.name} description={prato.description} 
        starValue={prato.avaliacao} rateTotal={5} />

        ) 
      }
       </section>
      {/* <Button variant='success disabled' value='order now' />
      <Button variant='booking' value='order now' />
      <Button variant='booking' value='booking now' />
      <Card variant='info' icon={iconClock} title='Today 10:00am-7:00pm' description='working hours' />
      <Card variant='about' icon={iconClock} title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' />
      <Card variant='about' icon={iconClock} title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' />
      <Card variant='product clickable' productCard icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={2} rateTotal={5} />
      <Card variant='product clickable' productCard icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={3} rateTotal={5} />
      <Card variant='review' productCard icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={5} rateTotal={5} />
      <Card variant='review' productCard icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={3} rateTotal={5} />
      <Card variant='review' productCard icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={4} rateTotal={5} /> */}

    </div>
  )
}

export default App
