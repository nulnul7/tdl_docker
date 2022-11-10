import React from 'react'
import './home.css'
import Content from '../features/Content'
import InputForm from '../features/InputForm'


const Home = () => {
  return (
    <div className="appContainer">
      <div className='appWrapper'>
            <div className='header'>List TO DO</div>
            <div className='content'>                
                <InputForm />
                <Content />
            </div>
      </div>
    </div>
  )
}

export default Home