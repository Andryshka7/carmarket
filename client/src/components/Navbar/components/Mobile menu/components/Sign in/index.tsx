import { BiLogInCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const SignIn = () => (
	<NavLink to="/login" className="mt-1 flex items-center gap-2">
		<BiLogInCircle size={35} color="white" />
		<h2 className="text-xl font-semibold">Sign in</h2>
	</NavLink>
)

export default SignIn
