import { makeFilter, priceFilter, transmissionFilter, typeFilter } from 'helpers/filters'
import { useCarsStore, useFiltersStore } from 'store'

const useFilteredCars = () => {
	const { cars } = useCarsStore()
	const { makes, transmissions, types, priceRange } = useFiltersStore()

	return cars
		.filter(({ model }) => makeFilter(model, makes))
		.filter(({ price }) => priceFilter(price, priceRange))
		.filter(({ transmission }) => transmissionFilter(transmission, transmissions))
		.filter(({ type }) => typeFilter(type, types))
}

export default useFilteredCars
