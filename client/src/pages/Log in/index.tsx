import { logInQuery } from 'api/auth'
import { isAxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'

import { GoogleSignIn } from 'components/shared'

type Data = {
	email: string
	password: string
}

const LogIn = () => {
	const navigate = useNavigate()
	const { setUser } = useAuthStore()

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Data>()

	const submit = async (data: Data) => {
		toast.promise(logInQuery(data), {
			loading: 'Logging in...',
			success: (user) => {
				setUser(user)
				navigate('/')
				return `Successfully logged in as ${user.username}`
			},
			error: (e) => {
				if (isAxiosError(e) && e.response?.status === 401) {
					return 'Wrong credentials!'
				}
				return 'Error while trying to log in'
			}
		})
	}

	return (
		<div className="m-auto">
			<form
				className="m-auto h-fit min-h-[480px] w-11/12 max-w-[500px] rounded-lg bg-neutral-700 p-10 text-white"
				onSubmit={handleSubmit(submit)}
			>
				<h1 className="text-center text-3xl font-semibold">Welcome Back</h1>
				<input
					type="text"
					{...register('email', { required: true })}
					placeholder="Email"
					className={`mt-8 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none ${
						errors['email'] ? 'border-red-500' : ''
					}`}
				/>
				<input
					type="text"
					{...register('password', { required: true })}
					placeholder="Password"
					className={`mt-6 w-full border-b-2 border-neutral-500 bg-transparent p-2 focus:outline-none ${
						errors['password'] ? 'border-red-500' : ''
					}`}
				/>

				<button
					type="submit"
					className="mx-auto mt-10 block rounded bg-green-600 px-8 py-1 font-semibold transition duration-200 hover:bg-opacity-90"
				>
					Log In
				</button>

				<p className="my-4 text-center text-neutral-300">or</p>
				<GoogleSignIn />

				<NavLink to="/signup">
					<p className="mt-7 block text-center font-medium text-zinc-300 transition duration-200 hover:text-zinc-200">
						Don't have account yet?
					</p>
				</NavLink>
			</form>
		</div>
	)
}

export default LogIn
