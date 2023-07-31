import { useState, useEffect, useRef } from 'react'
import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import useAuthStore from './store'

const Auth = () => {
    const {
        user: { avatar, name }
    } = useAuthStore()

    const [showDropDown, setShowDropDown] = useState(false)
    const dropDownRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (showDropDown && !dropDownRef.current?.contains(e.target as Node)) {
                setShowDropDown(false)
            }
        }
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [showDropDown])

    return (
        <div
            className='hidden md:flex items-center gap-3 cursor-pointer'
            onClick={() => setShowDropDown(true)}
            ref={dropDownRef}
        >
            <img src={avatar} className='w-8 h-8 rounded-full' />
            <h2 className='text-white font-semibold text-xl'>{name}</h2>
            {showDropDown && (
                <div className='rounded-lg bg-neutral-600 absolute top-14 right-16 py-2 z-[1]'>
                    <div className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'>
                        <IoCarSport size={25} color='white' />
                        <h2 className='text-white font-semibold text-lg'>My listings</h2>
                    </div>
                    <div className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'>
                        <BiMessageSquareAdd size={25} color='white' />
                        <h2 className='text-white font-semibold text-lg'>List car</h2>
                    </div>
                    <div className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'>
                        <HiLogout size={25} color='white' />
                        <h2 className='text-white font-semibold text-lg'>Logout</h2>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Auth
