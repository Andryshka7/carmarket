import { useFiltersStore } from 'store'
import { Transmission } from 'types'

import { CheckBox } from 'components/ui'

const transmissionsArray: Transmission[] = ['automatic', 'manual']

const TransmissionSelect = () => {
	const { transmissions, switchTransition } = useFiltersStore()

	return (
		<>
			<h2 className="mx-auto mt-5 text-4xl font-semibold text-white md:text-2xl">
				Transmission
			</h2>
			<div className="mt-2 w-28">
				{transmissionsArray.map((transmission) => (
					<div
						className="flex cursor-pointer items-center gap-2"
						onClick={() => switchTransition(transmission)}
						key={transmission}
					>
						<CheckBox active={transmissions[transmission]} />
						<h2 className="text-lg text-white">
							{transmission[0].toUpperCase() + transmission.slice(1)}
						</h2>
					</div>
				))}
			</div>
		</>
	)
}

export default TransmissionSelect
