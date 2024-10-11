import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentification=true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentification && authStatus !== authentification){
            navigate('/login')
        }else if(!authentification && authStatus !== authentification){
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authentification])
   return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
