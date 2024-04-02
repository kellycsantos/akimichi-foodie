import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'

function App() {
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
      </div>
      <Button variant='pill' value='order now'  />
      <Button variant='success disabled' value='order now'  />
      <Button variant='booking' value='order now'  />
      <Button variant='booking' value='booking now'/>
    </>
  )
}

export default App
