// import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman Singh' age={18} role='Software Engineer' img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Sarthak' age={28} role='Product Manager' img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Aditya' age={24} role='Data Scientist' img='https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Harshal' age={25} role='Full Stack developer' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxCAcu9Yhyq66sKvoQLGM-BBuO47UoXxEHw&s' />
    </div>
  )
}

export default App