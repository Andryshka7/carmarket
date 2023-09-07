import { NavLink } from 'react-router-dom'
import { MobileMenu, Auth } from './components'

const Navbar = () => (
    <div className='flex h-16 w-full items-center justify-between bg-neutral-700 px-9 md:px-16'>
        <NavLink
            to='/'
            className='flex cursor-pointer items-center gap-3.5'
        >
            <img
                src='/logo.png'
                className='h-12 w-12'
            />
            <h1 className='text-2xl font-bold text-white'>Carmarket</h1>
        </NavLink>
        <MobileMenu />
        <Auth />
    </div>
)

export default Navbar
