import React from 'react'
import { PATH } from '../hook/usePath'
import { Create, Home, Like, Search } from '../assets/images/Icons'
import NavbarItem from './NavbarItem'

function Navbar() {
    return (
        <div className='w-[15%] h-[100vh] pt-[70px] pl-[30px] bg-black'>
            <NavbarItem title={"Home"} Icon={<Home/>} path={PATH.home}/>
            <NavbarItem title={"Search"} Icon={<Search/>} path={PATH.search}/>
            <NavbarItem title={"Create Playlist"} Icon={<Create/>} path={PATH.single}/>
            <NavbarItem title={"Liked Songs"} Icon={<Like/>} path={PATH.like}/>
        </div>
    )
}

export default Navbar
