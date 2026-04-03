import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop' , 
      intro: 'Happy customer enjoying smooth services with quick support and seamless experience.',
      tag: 'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: 'Customer receiving limited services, needs better access, support, and personalized solutions.',
      tag: 'Underserve'
    },
    {
      img:'https://images.unsplash.com/photo-1726428633395-108116f05cc1?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: 'Driver managing daily rides, tracking earnings, seeking efficient financial and fuel solutions.',
      tag: 'Driver'
    },
    {
      img:'https://media.licdn.com/dms/image/v2/D4E03AQEs4Qwgr8NBag/profile-displayphoto-scale_400_400/B4EZxUSRw6GwAg-/0/1770940604175?e=2147483647&v=beta&t=dYT8AS8YlmGUkI5d-D9eUpj1tebOQK4v6f2Z_V2Jwsc',
      intro: 'Banker handling clients, offering financial advice, ensuring secure transactions and trusted relationships.',
      tag: 'Banker'
    }
]
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App