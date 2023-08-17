import { useFiltersStore } from 'store'

const allMakes = ['bmw', 'porche', 'mercedes', 'lamborgini']

const Make = () => {
    const { makes, applyMakeFilter, unApplyMakeFilter } = useFiltersStore()
    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-4 md:text-2xl'>Make</h2>
            <div className='mt-4'>
                <div
                    className='flex cursor-pointer items-center gap-2 transition duration-200 hover:scale-105'
                    onClick={() => makes.forEach((make) => unApplyMakeFilter(make))}
                >
                    <img src='logo.png' className='h-7 md:h-6' />
                    <h2 className='font-semibold text-white md:text-sm'>ALL</h2>
                </div>
                {allMakes.map((make) => (
                    <div
                        className='mt-2.5 flex cursor-pointer items-center gap-2 transition duration-200 hover:scale-105'
                        onClick={() => {
                            if (makes.includes(make)) {
                                unApplyMakeFilter(make)
                            } else {
                                applyMakeFilter(make)
                            }
                        }}
                        key={make}
                    >
                        <img src={`/car logos/${make}.png`} className='h-7 md:h-6' />
                        <h2 className='font-semibold text-white md:text-sm'>{make.toUpperCase()}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Make
