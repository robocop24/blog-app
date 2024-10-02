import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHander = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <div>
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={()=> logoutHander()}>Logout</button>
    </div>
  )
}

export default LogoutBtn
