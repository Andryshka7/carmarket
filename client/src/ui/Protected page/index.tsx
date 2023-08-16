import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import useAuthStore from 'store/auth'

interface Props {
    children: ReactNode
}

const ProtectedPage = ({ children }: Props) => {
    const { user } = useAuthStore()

    return user ? (
        children
    ) : (
        <div className='m-auto text-white'>
            <h1 className='text-center text-2xl font-semibold'>
                This page is protecred. <br className='sm:hidden' /> Sign in to view content
            </h1>
            <NavLink to='/login'>
                <button className='m-auto mt-8 block rounded-md bg-green-600 px-6 py-1 text-lg font-bold transition duration-200 hover:bg-opacity-90'>
                    Sign In
                </button>
            </NavLink>
        </div>
    )
}

export default ProtectedPage
