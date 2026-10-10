import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './features/githubSlice';

function GithubProvider({children}) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(()=>{
        const data = localStorage.getItem('username');
        if(data){
            return data;
        }
        return null;
    })
    
    useEffect(()=>{
        dispatch(fetchData(username));
    }, []);

  return (
    <>
        {children}
    </>
  )
}

export default GithubProvider