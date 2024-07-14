import { Transition } from '@headlessui/react'
import { deleteCarQuery } from 'api/cars'
import { useCreateProtectedRequest } from 'hooks'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useCarsStore } from 'store'
import { Image } from 'types'

import { DeleteButton, EditButton } from './components'

interface Props {
	id: number
	image: Image
	setEditCar: Dispatch<SetStateAction<boolean>>
}

const Preview = ({ id, image, setEditCar }: Props) => {
	const createProtectedRequest = useCreateProtectedRequest()
	const { removeCar } = useCarsStore()

	const [hover, setHover] = useState(false)
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
	const [isBeingDeleted, setIsBeingDeleted] = useState(false)

	const deleteCar = createProtectedRequest({
		requestQuery: async (token) => await deleteCarQuery(token, id),
		callback: () => removeCar(id)
	})

	const pointerEvents = isBeingDeleted ? 'pointer-events-none' : 'pointer-events-auto'

	return (
		<div
			className={`relative aspect-video w-full ${pointerEvents}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img
				src={image.url}
				className="absolute aspect-video w-full rounded-t-lg object-cover"
			/>

			<Transition
				show={hover}
				className="absolute flex h-full w-full items-center justify-center rounded-t-lg bg-black bg-opacity-70 text-xl transition duration-200"
				enterFrom="opacity-0"
				leaveTo="pointer-events-none opacity-0"
			>
				<Transition
					show={showDeleteConfirm}
					className="absolute flex h-full w-full flex-col items-center justify-center rounded-t-lg bg-black bg-opacity-30 transition duration-200"
					enterFrom="opacity-0"
					leaveTo="pointer-events-none opacity-0"
				>
					<h1 className="mx-auto w-56 text-center font-semibold">
						Are you sure you want to delete this listing?
					</h1>

					<div className="mx-auto mt-4 flex w-fit gap-8">
						<button
							className="rounded-md bg-green-600 px-4 py-1 text-sm font-semibold transition duration-200 hover:scale-105"
							onClick={async () => {
								setIsBeingDeleted(true)
								await toast.promise(deleteCar(), {
									success: 'Car has been deleted',
									loading: 'Removing listing...',
									error: 'Error while deleting listing'
								})
								setIsBeingDeleted(false)
							}}
						>
							Yes
						</button>

						<button
							className="rounded-md bg-red-500 px-4 py-1 text-sm font-semibold transition duration-200 hover:scale-105"
							onClick={() => setShowDeleteConfirm(false)}
						>
							No
						</button>
					</div>
				</Transition>

				<Transition
					show={!showDeleteConfirm}
					className="absolute flex items-center justify-center gap-3 transition duration-200"
					enterFrom="opacity-0"
					leaveTo="pointer-events-none opacity-0"
				>
					<EditButton onClick={() => setEditCar(true)} />
					<DeleteButton onClick={() => setShowDeleteConfirm(true)} />
				</Transition>
			</Transition>
		</div>
	)
}

export default Preview
