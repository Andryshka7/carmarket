import { NavLink } from 'react-router-dom'

const Error = () => (
    <div className='m-auto text-white'>
        <h1 className='text-4xl font-semibold'>Page is not found!</h1>
        <NavLink to='/' className='block w-fit mt-8 mx-auto bg-green-600 rounded px-6 py-1 text-lg font-semibold transition duration-200 hover:bg-opacity-80'>
            Home
        </NavLink>
    </div>
)

export default Error
