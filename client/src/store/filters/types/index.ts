interface PriceRange {
    from: number | null
    to: number | null
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
