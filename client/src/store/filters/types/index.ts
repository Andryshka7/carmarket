interface PriceRange {
	minimum?: number
	maximum?: number
}

interface Transmissions {
	automatic: boolean
	manual: boolean
}

interface Types {
	fuel: boolean
	electric: boolean
}

export { PriceRange, Transmissions, Types }
