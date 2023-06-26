'use client'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BiLogoApple} from 'react-icons/bi'
import {BsWhatsapp, BsSearch, BsGithub, BsFacebook} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import Input from './Input'
import { useCallback, useState } from 'react'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
    const [search, setSearch] = useState('')
    const [show, setShow] = useState(false)
 
    const toggele = useCallback(()=>{
        setShow(!show)
    }, [show])
  return (
    
    <div className="fixed top-0 z-50 w-full bg-white rounded-md mx-auto px-4 py-2 shadow-md justify-between">
        <div className="flex flex-row justify-between items-center p-2">
        <div className="flex items-center flex-row cursor-pointer gap-2 ">
       <Link href= '/'><BiLogoApple size={26} color='yellow'/> </Link> 
        <span className='text-green-600 font-bold'>Kit</span>
        <div className="flex flex-row gap-2 relative justify-center items-center
        
        ">
        <BsSearch className='sm:hidden text-neutral-500 cursor-pointer'/>
        <div className="hidden sm:inline-flex">
        <Input 
        type= {search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search'/>
        </div>
        </div>
        </div>

        <div className="flex flex-row items-center gap-2 cursor-pointer">
            <p><BsFacebook size={20} color='blue'/></p>
            <p><BsGithub size={20}/></p>
            <p> <BsWhatsapp size={20} color='green' /> </p>
        </div>
        <div className="hidden md:flex flex-row flex-end justify-center gap-2 cursor-pointer
       
        ">
            <p className=' font-medium hover:text-green-600'>Home</p>
            <p className='font-medium hover:text-green-600'>Blog</p>
            <p className='font-medium hover:text-green-600'>Projects</p>
            <p className='font-medium hover:text-green-600'>Services</p>
            <p className='font-medium hover:text-green-600'><CgProfile size={24} /></p>
        </div>
        <div className="flex-row space-x-2 hidden sm:inline-flex">

        <Button label='Sign In'
            onClick={()=>{}}
            />
        <Button label='Sign up'
            onClick={()=>{}}
            secondary
            />
            </div>
       <div className="z-99 relative flex flex-col">
        <div onClick={toggele} className="sm:hidden z-10 cursor-pointer">
            <div className="">{show ? <AiOutlineClose />:<AiOutlineMenu/>}</div>
            </div>
            {show && (
            <div className="cursor-pointer ">
            <p className=' font-medium hover:text-green-600'>Home</p>
            <p className='font-medium hover:text-green-600'>Blog</p>
            <p className='font-medium hover:text-green-600'>Projects</p>
            <p className='font-medium hover:text-green-600'>Services</p>
            <p className='font-medium hover:text-green-600'>Profile</p>
            <div className="flex flex-col space-y-2">
            <Button label='Sign In'
            onClick={()=>{}}
            />
            <Button label='Sign up'
            onClick={()=>{}}
            secondary
            />
            
            </div>
            </div> )}
            </div>
        </div>

        </div>
      
  )
}

export default Header
