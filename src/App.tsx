import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import  iconClock from './assets/icons/clock.svg'

function App() {

  function alertTeste(){
    alert('ola')
  }

  const [count, setCount] = useState(0)
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

  return (
    <>
    <Header links={links}/>
      <div>
        <h1>Your favourite food & hot</h1>
        <h2>Akimichi foodie</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ullam officia, eos amet sint voluptates odit nemo provident fuga beatae.</p>
      </div>
      <Button variant='pill' value='order now'  />
      <Button variant='success disabled' value='order now'  />
      <Button variant='booking' value='order now'  />
      <Button variant='booking' value='booking now'/>
      <Card variant='info' icon={iconClock} title='Today 10:00am-7:00pm' description='working hours'/>
      <Card variant='about' icon={iconClock} title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.'/>
      <Card variant='about' icon={iconClock} title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.'/>
      <Card variant='product clickable' productCard={true} icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={2}/>
      <Card variant='product clickable' productCard={true} icon="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.' starValue={4}/>
     
    </>
  )
}

export default App
