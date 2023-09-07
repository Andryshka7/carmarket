import { PriceRange } from 'store/filters/types'

const priceFilter = (price: number, priceRange: PriceRange) => {
    const { minimum, maximum } = priceRange

    if (minimum && maximum) {
        return minimum < price && price < maximum
    } else if (minimum && !maximum) {
        return minimum < price
    } else if (!minimum && maximum) {
        return price < maximum
    } else {
        return true
    }
}

export default priceFilter
