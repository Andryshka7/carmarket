import { useState, useEffect, useRef } from 'react'
import { Dropdown } from './components'
import { useAuthStore } from 'store'
import { NavLink } from 'react-router-dom'

const Auth = () => {
    const { user } = useAuthStore()

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

    if (!user) {
        return (
            <div className='hidden gap-5 md:flex'>
                <NavLink
                    to='login'
                    className='rounded-md border-2 border-white bg-neutral-700 px-5 py-0.5 font-semibold text-white'
                >
                    Sign In
                </NavLink>
            </div>
        )
    }

    return (
        <>
            <div
                ref={dropDownRef}
                className='hidden cursor-pointer items-center gap-3 md:flex'
                onClick={() => setShowDropDown(true)}
            >
                <img src={user.avatar} className='h-8 w-8 rounded-full' />
                <h2 className='text-xl font-semibold text-white'>{user.username}</h2>
            </div>
            <Dropdown showDropdown={showDropDown} />
        </>
    )
}

export default Auth
