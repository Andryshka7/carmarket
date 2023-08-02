import { NavLink } from 'react-router-dom'
import { Menu, Auth } from './components'

const Navbar = () => (
    <div className='w-full h-16 flex px-9 md:px-16 justify-between items-center bg-neutral-700'>
        <NavLink to='/' className='flex items-center gap-3.5 cursor-pointer'>
            <img src='/logo.png' className='h-12 w-12' />
            <h1 className='text-2xl font-bold text-white'>Carmarket</h1>
        </NavLink>
        <Menu />
        <Auth />
    </div>
)

export default Navbar
