import googleIcon from 'assets/google.png'
import { GOOGLE_AUTH } from 'config'
import { NavLink } from 'react-router-dom'

const GoogleSignIn = () => (
	<NavLink
		to={GOOGLE_AUTH}
		className="mx-auto flex w-fit cursor-pointer items-center gap-5 rounded-lg border-2 border-neutral-500 px-6 py-2 transition duration-200 hover:bg-neutral-500 hover:bg-opacity-20"
	>
		<img src={googleIcon} className="h-8 w-8" />
		<h3 className="font-semibold">Sign in with Google</h3>
	</NavLink>
)

export default GoogleSignIn
