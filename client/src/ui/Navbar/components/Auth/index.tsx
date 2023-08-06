import { useState, useEffect, useRef } from 'react'
import { Dropdown } from './components'
import useAuthStore from './store'

const Auth = () => {
    const {
        user: { avatar, username }
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
                className='hidden cursor-pointer items-center gap-3 md:flex'
                onClick={() => setShowDropDown(true)}
            >
                <img src={avatar} className='h-8 w-8 rounded-full' />
                <h2 className='text-xl font-semibold text-white'>{username}</h2>
            </div>
            <Dropdown showDropdown={showDropDown} />
        </>
    )
}

export default Auth
