import React from 'react'
import CounterForm from './CounterForm.jsx'
import Btns from './Btns.jsx'
import DisplayNumber from './DisplayNumber.jsx'
import GithubDetails from './GithubDetails.jsx'
import GithubForm from './GithubForm.jsx'

function App() {
  return (
    <div>
      <CounterForm></CounterForm>
      <DisplayNumber></DisplayNumber>
      <Btns></Btns>

      <GithubForm></GithubForm>
      <GithubDetails></GithubDetails>
      
    </div>
  )
}

export default App