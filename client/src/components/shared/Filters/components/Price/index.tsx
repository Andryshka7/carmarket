import { useFiltersStore } from 'store'

const Price = () => {
    const { priceRange, setPriceFilters } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-3 md:text-2xl'>Price</h2>
            <div className='mt-4 flex gap-2 md:mt-3'>
                <input
                    type='number'
                    value={priceRange.minimum || ''}
                    placeholder='Min'
                    className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
                    onChange={(e) => setPriceFilters({ minimum: Number(e.target.value) })}
                />

                <p className='text-lg font-bold text-[#999]'>-</p>

                <input
                    type='number'
                    value={priceRange.maximum || ''}
                    placeholder='Max'
                    className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
                    onChange={(e) => setPriceFilters({ maximum: Number(e.target.value) })}
                />
            </div>
        </>
    )
}

export default Price
