import { IoCarSport } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const MyListings = () => (
	<NavLink to="/mylistings" className="mt-1 flex items-center gap-2">
		<IoCarSport size={35} color="white" />
		<h2 className="text-xl font-semibold">My listings</h2>
	</NavLink>
)

export default MyListings
