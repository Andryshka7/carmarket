import { useState, useEffect, useRef } from 'react'
import { Dropdown } from './components'
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
        <>
            <div
                ref={dropDownRef}
                className='hidden md:flex items-center gap-3 cursor-pointer'
                onClick={() => setShowDropDown(true)}
            >
                <img src={avatar} className='w-8 h-8 rounded-full' />
                <h2 className='text-white font-semibold text-xl'>{name}</h2>
            </div>
            <Dropdown showDropdown={showDropDown} />
        </>
    )
}

export default Auth
