import { refreshTokenQuery } from 'api/auth'
import checkAuth from 'api/auth/check auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'

type ProtectedRequestOptions<T> = {
	redirect?: boolean
	requestQuery: () => Promise<T>
	callback: (response: T) => void
}

const useCreateProtectedRequest = () => {
	const { user, logOut } = useAuthStore()
	const navigate = useNavigate()

	const createProtectedRequest = <T>({
		redirect = true,
		requestQuery,
		callback
	}: ProtectedRequestOptions<T>) => {
		const protectedRequest = async () => {
			let isAuthenticated = false

			try {
				await checkAuth()
				isAuthenticated = true
			} catch (error) {
				try {
					if (user) {
						await refreshTokenQuery(user.id)
						await checkAuth()
						isAuthenticated = true
					}
				} catch (error) {
					logOut()
					if (redirect) navigate('/login')
				}
			}

			if (isAuthenticated) {
				const response = await requestQuery()
				callback(response)
			} else {
				logOut()
				if (redirect) navigate('/login')
			}
		}

		return protectedRequest
	}
	return createProtectedRequest
}

export default useCreateProtectedRequest
