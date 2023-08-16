import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import googleIcon from 'assets/google.png'
import { signUpQuery } from 'Api/auth'
import Loader from 'ui/Loader'
import useAuthStore from 'store/auth'

const GOOGLE_AUTH = import.meta.env.VITE_GOOGLE_AUTH

type Data = {
    username: string
    email: string
    password: string
    confirmPassword: string
}

const SignUp = () => {
    const navigate = useNavigate()
    const { setUser } = useAuthStore()

    const [loading, setLoading] = useState(false)
    const { handleSubmit, register, reset } = useForm<Data>()
    const [file, setFile] = useState<null | File>()

    const submit = async (data: Data) => {
        setLoading(true)
        if (file) {
            const formData = new FormData()
            formData.append('avatar', file)
            formData.append('username', data.username)
            formData.append('email', data.email)
            formData.append('password', data.password)

            const user = await signUpQuery(formData)

            setUser(user)
            navigate('/')
        }
        setLoading(false)
        reset()
    }

    return loading ? (
        <div className='m-auto flex h-[660px] w-[500px] items-center justify-center rounded-lg bg-neutral-700'>
            <Loader />
        </div>
    ) : (
        <form
            className='m-auto h-[660px] w-[500px] rounded-lg bg-neutral-700 p-10 text-white'
            onSubmit={handleSubmit(submit)}
        >
            <h1 className='text-center text-3xl font-semibold'>Create account</h1>
            <input
                type='text'
                {...register('username')}
                placeholder='Username'
                className='mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />
            <input
                type='text'
                {...register('email')}
                placeholder='Email'
                className='mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />
            <input
                type='text'
                {...register('password')}
                placeholder='Password'
                className='mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />
            <input
                type='text'
                {...register('confirmPassword')}
                placeholder='Confirm password'
                className='mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none'
            />

            <label
                htmlFor='avatar'
                className='mt-6 flex h-14 w-full items-center justify-center rounded border-2 border-dashed border-neutral-500'
            >
                {file ? (
                    <div className='flex items-center gap-3'>
                        <img src={URL.createObjectURL(file)} className='h-8 w-8 rounded-full' />
                        <h3 className='line-clamp-1 max-w-[220px]'>{file.name}</h3>
                    </div>
                ) : (
                    <h3 className='font-medium'>Drop your avatar here or click to select</h3>
                )}
                <input
                    type='file'
                    accept='image/*'
                    id='avatar'
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    hidden
                />
            </label>

            <button
                type='submit'
                className='mx-auto mt-6 block rounded bg-green-600 px-8 py-1 font-semibold transition duration-200 hover:bg-opacity-90'
            >
                Sign Up
            </button>

            <p className='my-3 text-center text-neutral-300'>or</p>

            <NavLink
                to={GOOGLE_AUTH}
                className='mx-auto flex w-fit cursor-pointer items-center gap-5 rounded-lg border-2 border-neutral-500 px-6 py-2'
            >
                <img src={googleIcon} className='h-8 w-8' />
                <h3 className='font-semibold'>Sign in with Google</h3>
            </NavLink>
            <NavLink to='/login'>
                <p className='mt-7 block text-center font-medium text-zinc-300 transition duration-200 hover:text-zinc-200'>
                    Already have an account?
                </p>
            </NavLink>
        </form>
    )
}

export default SignUp
