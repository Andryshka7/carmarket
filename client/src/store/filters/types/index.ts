interface PriceRange {
    minimum: number | null
    maximum: number | null
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
