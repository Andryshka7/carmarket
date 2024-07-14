import { Types } from 'store/filters/types'
import { Type } from 'types'

const typeFilter = (type: Type, types: Types) => {
	if (!types.fuel && !types.electric) {
		return true
	} else {
		return types[type]
	}
}

export default typeFilter
