import { Menu } from '@headlessui/react'
import { HiLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from 'store'

const LogOut = () => {
	const { logOut } = useAuthStore()

	return (
		<Menu.Item>
			<NavLink
				to="/"
				className="my-0.5 flex cursor-pointer items-center gap-2 px-6 py-px hover:bg-neutral-500"
				onClick={logOut}
			>
				<HiLogout size={25} color="white" />
				<h2 className="text-lg font-semibold">Logout</h2>
			</NavLink>
		</Menu.Item>
	)
}

export default LogOut
