import { Menu } from '@headlessui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const ListCar = () => (
    <Menu.Item>
        <NavLink
            to='/listcar'
            className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
        >
            <BiMessageSquareAdd
                size={25}
                color='white'
            />
            <h2 className='text-lg font-semibold'>List car</h2>
        </NavLink>
    </Menu.Item>
)

export default ListCar
