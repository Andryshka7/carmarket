import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { useAuthStore } from 'store'

import { Filters } from 'components/shared'
import { Portal } from 'components/ui'

import { ListCar, LogOut, MyListings, SignIn } from './components'

const Menu = () => {
	const { user } = useAuthStore()
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		if (!showMenu) {
			document.body.classList.add('overflow-hidden')
			setShowMenu(true)
		} else {
			document.body.classList.remove('overflow-hidden')
			setShowMenu(false)
		}
	}

	return (
		<div className="md:hidden">
			<HiMenu size={35} color="white" onClick={toggleMenu} />
			<Portal>
				<Transition
					className="fixed left-0 top-0 flex h-full w-full overflow-y-scroll bg-neutral-700 transition duration-150"
					enterFrom="opacity-0 -translate-y-full"
					leaveTo="opacity-0 -translate-y-full"
					show={showMenu}
				>
					<div className="my-auto flex h-fit w-full flex-col items-center">
						<Filters />

						<div className="mt-4 text-white" onClick={toggleMenu}>
							<MyListings />
							<ListCar />
							{user ? <LogOut /> : <SignIn />}
						</div>

						<div>
							<AiOutlineCloseCircle
								color="white"
								size={60}
								onClick={toggleMenu}
								className="my-5"
							/>
						</div>
					</div>
				</Transition>
			</Portal>
		</div>
	)
}

export default Menu
