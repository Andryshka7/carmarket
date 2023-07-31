import { Menu, Auth } from './components'

const Navbar = () => (
    <div className='w-full h-16 flex px-9 md:px-16 justify-between items-center bg-neutral-700'>
        <div className='flex items-center gap-3.5'>
            <img src='/logo.png' className='h-12 w-12' />
            <h1 className='text-2xl font-bold text-white'>Carmarket</h1>
        </div>
        <Menu />
        <Auth />
    </div>
)

export default Navbar
