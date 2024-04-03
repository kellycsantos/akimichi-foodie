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
    <button onClick={alertTeste}>aa</button>
      <div>
        <h1>Your favourite food & hot</h1>
        <h2>Akimichi foodie</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ullam officia, eos amet sint voluptates odit nemo provident fuga beatae.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
      </div>
      <Button variant='pill' value='order now'  />
      <Button variant='success disabled' value='order now'  />
      <Button variant='booking' value='order now'  />
      <Button variant='booking' value='booking now'/>
      <Card variant='info' icon={iconClock} title='Today 10:00am-7:00pm' description='working hours'/>
      <Card variant='about' icon={iconClock} title='Pick meals' description=' Lorem ipsum dolor sit amet consectetur.'/>
     
    </>
  )
}

export default App
