import React from 'react'
import { useSelector } from 'react-redux'

function GithubDetails() {
    const {user, loading, error} = useSelector((state)=>state.github);
    if(!user){
        return (
            <div>User not mentioned</div>
        )
    }
    if(loading){
        return (
            <div>Loading...</div>
        )
    }
  return (
    <div>
        <h2>{user.login}</h2>
        <h2>{user.followers}</h2>
    </div>
  )
}

export default GithubDetails