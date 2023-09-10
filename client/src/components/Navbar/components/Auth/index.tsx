import { Menu, Transition } from '@headlessui/react'
import { useAuthStore } from 'store'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { MyListings, ListCar, LogOut } from './components'

const Auth = () => {
    const { user } = useAuthStore()

    return user ? (
        <Menu>
            <Menu.Button className='hidden cursor-pointer items-center gap-3 md:flex'>
                <img
                    src={user.avatar}
                    className='h-8 w-8 object-cover object-center rounded-full'
                />
                <h2 className='text-xl font-semibold text-white'>{user.username}</h2>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter='transition duration-100'
                enterFrom='opacity-0 scale-90 -translate-y-4'
                leave='transition duration-75'
                leaveTo='opacity-0 scale-90 -translate-y-4'
            >
                <Menu.Items className='absolute right-16 top-14 z-[1] rounded-md bg-neutral-600 py-2 text-white'>
                    <MyListings />
                    <ListCar />
                    <LogOut />
                </Menu.Items>
            </Transition>
        </Menu>
    ) : (
        <div className='hidden md:block'>
            <NavLink
                to='login'
                className='rounded-md border-2 border-white bg-neutral-700 px-5 py-1.5 font-semibold text-white'
            >
                Sign In
            </NavLink>
        </div>
    )
}

export default Auth
