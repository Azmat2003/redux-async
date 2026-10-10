import React from 'react'
import { useSelector } from 'react-redux'

function DisplayNumber() {
    const {current} = useSelector((state)=>state.counter);
    if(current===null){
        return (
            <div>
                Number not defined yet
            </div>
        )
    }
  return (
    <div>{current}</div>
  )
}

export default DisplayNumber