import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import googleIcon from 'assets/google.png'
import { logInQuery } from 'Api/auth'
import { Loader } from 'ui'
import { useAuthStore } from 'store'

const GOOGLE_AUTH = import.meta.env.VITE_GOOGLE_AUTH

type Data = {
    email: string
    password: string
}

const LogIn = () => {
    const navigate = useNavigate()
    const { setUser } = useAuthStore()
    const [loading, setLoading] = useState(false)

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<Data>()

    const submit = async (data: Data) => {
        try {
            setLoading(true)
            const user = await logInQuery(data)
            setUser(user)
            navigate('/')
        } catch (error) {
            console.log('Invalid credentials')
        }
        setLoading(false)
        reset()
    }

    return loading ? (
        <div className='m-auto flex h-[480px] w-11/12 max-w-[500px] items-center justify-center rounded-lg bg-neutral-700'>
            <Loader />
        </div>
    ) : (
        <form
            className='m-auto h-fit min-h-[480px] w-11/12 max-w-[500px] rounded-lg bg-neutral-700 p-10 text-white'
            onSubmit={handleSubmit(submit)}
        >
            <h1 className='text-center text-3xl font-semibold'>Welcome Back</h1>
            <input
                type='text'
                {...(register('email'), { required: true })}
                placeholder='Email'
                className={`mt-8 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none ${
                    errors['email'] ? 'border-red-500' : ''
                }`}
            />
            <input
                type='text'
                {...register('password', { required: true })}
                placeholder='Password'
                className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none ${
                    errors['password'] ? 'border-red-500' : ''
                }`}
            />

            <button
                type='submit'
                className='mx-auto mt-10 block rounded bg-green-600 px-8 py-1 font-semibold transition duration-200 hover:bg-opacity-90'
            >
                Log In
            </button>

            <p className='my-4 text-center text-neutral-300'>or</p>

            <NavLink
                to={GOOGLE_AUTH}
                className='mx-auto flex w-fit cursor-pointer items-center gap-5 rounded-lg border-2 border-neutral-500 px-6 py-2 transition duration-200 hover:bg-neutral-500 hover:bg-opacity-20'
            >
                <img src={googleIcon} className='h-8 w-8' />
                <h3 className='font-semibold'>Sign in with Google</h3>
            </NavLink>

            <NavLink to='/signup'>
                <p className='mt-7 block text-center font-medium text-zinc-300 transition duration-200 hover:text-zinc-200'>
                    Don't have account yet?
                </p>
            </NavLink>
        </form>
    )
}

export default LogIn
