import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Arrow } from '../assets/images/Icons'

export const NavigateBtn = () => {
  const navigate = useNavigate()

    return (
        <div className="flex items-center py-5 px-10 space-x-[22px]">
            <button onClick={() => navigate(-1)} className='w-10 navigate-btn h-10 rounded-full flex items-center justify-center'><Arrow /></button>
            <button onClick={() => navigate(+1)} className='w-10 rotate-[180deg] navigate-btn h-10 rounded-full flex items-center justify-center'><Arrow /></button>
        </div>
    )
}
