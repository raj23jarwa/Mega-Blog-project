import React,{useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
export default function Protected({children,authentication=true})  {

    const navigate =useNavigate()
    const [loader, setLoader] =useState(false)
    const authStatus =useSelector(state =>state.auth.status)

    useEffect(() =>{
        // true && true // true && false !==true 
        // TODO :make it more easy to understand
        // if(authStatus ==true){
        //     navigate("/")
        // }
        // else if(authStatus==false){
        //     navigate("/login")
        // }
        if(authentication && authStatus !==authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !==authentication){
            navigate("/")
        }
        setLoader(false)

    },[authStatus,navigate ,authentication])
  return (
    <div>AuthLayout</div>
  )
}

