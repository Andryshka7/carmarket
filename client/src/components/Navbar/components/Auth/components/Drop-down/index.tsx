import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { useAuthStore } from 'store'

interface Props {
    showDropdown: boolean
    setShowDropDown: Dispatch<SetStateAction<boolean>>
}

const Dropdown = ({ showDropdown, setShowDropDown }: Props) => {
    const { logOut } = useAuthStore()
    return (
        showDropdown && (
            <div className='absolute right-16 top-14 z-[1] rounded-lg bg-neutral-600 py-2 text-white'>
                <NavLink
                    to='/mylistings'
                    onClick={() => setShowDropDown(false)}
                    className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
                >
                    <IoCarSport
                        size={25}
                        color='white'
                    />
                    <h2 className='text-lg font-semibold'>My listings</h2>
                </NavLink>
                <NavLink
                    to='/createlisting'
                    onClick={() => setShowDropDown(false)}
                    className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
                >
                    <BiMessageSquareAdd
                        size={25}
                        color='white'
                    />
                    <h2 className='text-lg font-semibold'>List car</h2>
                </NavLink>
                <div
                    className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
                    onClick={() => {
                        setShowDropDown(false)
                        logOut()
                    }}
                >
                    <HiLogout
                        size={25}
                        color='white'
                    />
                    <h2 className='text-lg font-semibold'>Logout</h2>
                </div>
            </div>
        )
    )
}

export default Dropdown
