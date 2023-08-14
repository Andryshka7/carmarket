import { create } from 'zustand'

interface Price {
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

interface Filters {
    makes: string[]
    price: Price
    transmissions: Transmissions
    types: Types

    applyMakeFilter: (make: string) => void
    unApplyMakeFilter: (make: string) => void

    switchTransition: (transmission: keyof Transmissions) => void
    switchType: (type: keyof Types) => void

    setPriceFilters: (price: Price) => void
}

const useFiltersStore = create<Filters>()((set) => ({
    makes: [],
    price: {
        from: null,
        to: null
    },
    transmissions: {
        automatic: false,
        manual: false
    },
    types: {
        fuel: false,
        electric: false
    },
    applyMakeFilter: (item) => {
        set((state) => {
            const { makes } = state
            makes.push(item)
            return { ...state, makes }
        })
    },
    unApplyMakeFilter: (item) => {
        set((state) => {
            const makes = state.makes.filter((element) => element !== item)
            return { ...state, makes }
        })
    },

    switchTransition: (transmission) => {
        set((state) => {
            const { transmissions } = state
            transmissions[transmission] = !transmissions[transmission]
            return { ...state, transmissions }
        })
    },
    switchType: (type) => {
        set((state) => {
            const { types } = state
            types[type] = !types[type]
            return { ...state, types }
        })
    },
    setPriceFilters: (price) => {
        set((state) => ({
            ...state,
            price
        }))
    }
}))

export default useFiltersStore
