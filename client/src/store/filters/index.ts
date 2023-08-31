import { Transmission, Type } from 'types'
import { create } from 'zustand'
import { PriceRange, Transmissions, Types } from './types'

interface Filters {
    makes: string[]
    priceRange: PriceRange
    transmissions: Transmissions
    types: Types

    applyMakeFilter: (make: string) => void
    unApplyMakeFilter: (make: string) => void

    switchTransition: (transmission: Transmission) => void
    switchType: (type: Type) => void

    setPriceFilters: (price: PriceRange) => void
}

const useFiltersStore = create<Filters>()((set) => ({
    makes: [],
    priceRange: {
        from: null,
        to: null
    },
    transmissions: {
        automatic: true,
        manual: true
    },
    types: {
        fuel: true,
        electric: true
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
    setPriceFilters: (priceRange) => {
        set((state) => ({
            ...state,
            priceRange
        }))
    }
}))

export default useFiltersStore
