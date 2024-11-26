import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({Icon, title, path}) {
    return (
        <NavLink className='text-white opacity-[0.6] flex items-center space-x-5 mb-5' to={path}>
            {Icon}
            <span className='text-[18px] leading-[22px] font-bold'>{title}</span>
        </NavLink>
    )
}

export default NavbarItem