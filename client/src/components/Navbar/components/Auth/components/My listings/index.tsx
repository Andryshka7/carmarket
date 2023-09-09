import { NavLink } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { IoCarSport } from 'react-icons/io5'

const MyListings = () => (
    <Menu.Item>
        <NavLink
            to='/mylistings'
            className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
        >
            <IoCarSport
                size={25}
                color='white'
            />
            <h2 className='text-lg font-semibold'>My listings</h2>
        </NavLink>
    </Menu.Item>
)

export default MyListings
