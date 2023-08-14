import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import googleIcon from 'assets/google.png'
import { logInQuery } from 'Api/users'
import Loader from 'ui/Loader'
import useAuthStore from 'store/auth'

const GOOGLE_AUTH = import.meta.env.VITE_GOOGLE_AUTH

type Data = {
    email: string
    password: string
}

const LogIn = () => {
    const navigate = useNavigate()
    const { login } = useAuthStore()

    const [loading, setLoading] = useState(false)
    const { handleSubmit, register, reset } = useForm<Data>()

    const submit = async (data: Data) => {
        setLoading(true)

        const user = await logInQuery(data)

        login(user)
        navigate('/')
        setLoading(false)
        reset()
    }

    return loading ? (
        <div className='m-auto flex h-[450px] w-[500px] items-center justify-center rounded-lg bg-neutral-700'>
            <Loader />
        </div>
    ) : (
        <form
            className='m-auto h-[450px] w-[500px] rounded-lg bg-neutral-700 p-10 text-white'
            onSubmit={handleSubmit(submit)}
        >
            <h1 className='text-center text-3xl font-semibold'>Create account</h1>
            <input
                type='text'
                {...register('email')}
                placeholder='Email'
                className='mt-8 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />
            <input
                type='text'
                {...register('password')}
                placeholder='Password'
                className='mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />

            <button
                type='submit'
                className='mx-auto mt-10 block rounded bg-green-600 px-8 py-1 font-semibold transition duration-200'
            >
                Log In
            </button>

            <p className='my-5 text-center text-neutral-300'>or</p>

            <NavLink
                to={GOOGLE_AUTH}
                className='mx-auto flex w-fit cursor-pointer items-center gap-5 rounded-lg border-2 border-neutral-500 px-6 py-2'
            >
                <img src={googleIcon} className='h-8 w-8' />
                <h3 className='font-semibold'>Sign in with Google</h3>
            </NavLink>
        </form>
    )
}

export default LogIn
