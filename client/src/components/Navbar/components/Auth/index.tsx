import { Menu, Transition } from '@headlessui/react'
import { useAuthStore } from 'store'
import { NavLink } from 'react-router-dom'
import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { Fragment } from 'react'

const Auth = () => {
    const { user, logOut } = useAuthStore()

    return user ? (
        <Menu>
            <Menu.Button className='hidden cursor-pointer items-center gap-3 md:flex'>
                <img
                    src={user.avatar}
                    className='h-8 w-8 rounded-full'
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
                <Menu.Items className='absolute right-16 top-14 z-[1] rounded-lg bg-neutral-600 py-2 text-white'>
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
                    <Menu.Item>
                        <NavLink
                            to='/createlisting'
                            className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
                        >
                            <BiMessageSquareAdd
                                size={25}
                                color='white'
                            />
                            <h2 className='text-lg font-semibold'>List car</h2>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <div
                            className='my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500'
                            onClick={logOut}
                        >
                            <HiLogout
                                size={25}
                                color='white'
                            />
                            <h2 className='text-lg font-semibold'>Logout</h2>
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    ) : (
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

export default Auth
