import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUpQuery } from 'api/auth'
import { Loader } from 'components'
import { useAuthStore } from 'store'
import { GoogleSignIn } from 'pages/shared'

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
    const [file, setFile] = useState<null | File>()

    const {
        handleSubmit,
        register,
        watch,
        reset,
        formState: { errors }
    } = useForm<Data>({ mode: 'onSubmit' })

    const submit = async (data: Data) => {
        setLoading(true)

        const formData = new FormData()

        formData.append('username', data.username)
        formData.append('email', data.email)
        formData.append('password', data.password)

        if (file) formData.append('avatar', file)

        const user = await signUpQuery(formData)

        setUser(user)
        navigate('/')

        setLoading(false)
        reset()
    }

    return loading ? (
        <div className='m-auto flex h-[660px] w-11/12 max-w-[500px] items-center justify-center rounded-lg bg-neutral-700'>
            <Loader />
        </div>
    ) : (
        <div className='m-auto'>
            <form
                className='mx-auto my-4 h-fit min-h-[660px] w-11/12 max-w-[500px] rounded-lg bg-neutral-700 p-10 text-white'
                onSubmit={handleSubmit(submit)}
            >
                <h1 className='text-center text-3xl font-semibold'>Create account</h1>
                <input
                    type='text'
                    {...register('username', { required: true, minLength: 3 })}
                    placeholder='Username'
                    className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 transition duration-200 focus:outline-none ${
                        errors['username'] ? 'border-red-500' : ''
                    }`}
                />
                <input
                    type='email'
                    {...register('email', {
                        required: true,
                        validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                    })}
                    placeholder='Email'
                    className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 transition duration-200 focus:outline-none ${
                        errors['email'] ? 'border-red-500' : ''
                    }`}
                />
                <input
                    type='password'
                    {...register('password', {
                        required: true,
                        minLength: 3,
                        validate: () => watch('password') === watch('confirmPassword')
                    })}
                    placeholder='Password'
                    className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 transition duration-200 focus:outline-none ${
                        errors['password'] ? 'border-red-500' : ''
                    }`}
                />
                <input
                    type='password'
                    {...register('confirmPassword', {
                        required: true,
                        minLength: 3,
                        validate: () => watch('password') === watch('confirmPassword')
                    })}
                    placeholder='Confirm password'
                    className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 transition duration-200 focus:outline-none ${
                        errors['confirmPassword'] ? 'border-red-500' : ''
                    }`}
                />

                <label
                    htmlFor='avatar'
                    className='mt-6 flex h-fit w-full items-center justify-center rounded border-2 border-dashed border-neutral-500 p-3'
                >
                    {file ? (
                        <div className='flex items-center gap-3'>
                            <img
                                src={URL.createObjectURL(file)}
                                className='h-8 w-8 rounded-full'
                            />
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
                <GoogleSignIn />

                <NavLink to='/login'>
                    <p className='mt-7 block text-center font-medium text-zinc-300 transition duration-200 hover:text-zinc-200'>
                        Already have an account?
                    </p>
                </NavLink>
            </form>
        </div>
    )
}

export default SignUp
