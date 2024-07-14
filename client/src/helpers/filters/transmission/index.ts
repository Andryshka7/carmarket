import { Transmissions } from 'store/filters/types'
import { Transmission } from 'types'

const transmissionFilter = (transmission: Transmission, transmissions: Transmissions) => {
	if (!transmissions.manual && !transmissions.automatic) {
		return true
	} else {
		return transmissions[transmission]
	}
}

export default transmissionFilter
