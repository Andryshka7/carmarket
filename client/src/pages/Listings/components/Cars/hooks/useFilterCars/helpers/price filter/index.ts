import { PriceRange } from 'store/filters/types'

const priceFilter = (price: number, priceRange: PriceRange) => {
    if (priceRange.from && priceRange.to) {
        return priceRange.from < price && price < priceRange.to
    } else if (priceRange.from && !priceRange.to) {
        return priceRange.from < price
    } else if (!priceRange.from && priceRange.to) {
        return price < priceRange.to
    } else {
        return true
    }
}

export default priceFilter
