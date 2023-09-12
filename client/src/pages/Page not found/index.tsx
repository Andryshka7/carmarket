import { NavLink } from 'react-router-dom'

const PageNotFound = () => (
    <div className='m-auto text-white'>
        <h1 className='text-4xl font-semibold'>Page is not found!</h1>
        <NavLink
            to='/'
            className='mx-auto mt-8 block w-fit rounded bg-green-600 px-6 py-1 text-lg font-semibold transition duration-200 hover:bg-opacity-80'
        >
            Home
        </NavLink>
    </div>
)

export default PageNotFound
