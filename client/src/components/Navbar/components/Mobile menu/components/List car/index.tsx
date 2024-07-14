import { BiMessageSquareAdd } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const ListCar = () => (
	<NavLink to="/listcar" className="mt-1 flex items-center gap-2">
		<BiMessageSquareAdd size={35} color="white" />
		<h2 className="text-xl font-semibold">List car</h2>
	</NavLink>
)

export default ListCar
