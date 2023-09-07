import { CheckBox } from 'components'
import { useFiltersStore } from 'store'

const allMakes = ['bmw', 'porche', 'mercedes']

const Make = () => {
    const { makes, applyMakeFilter, unApplyMakeFilter } = useFiltersStore()
    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-4 md:text-2xl'>Make</h2>
            <div className='mt-4'>
                <div
                    className='flex cursor-pointer items-center gap-2'
                    onClick={() => makes.forEach((make) => unApplyMakeFilter(make))}
                >
                    <CheckBox active={makes.length === 0} />
                    <h2 className='font-semibold text-white md:text-sm'>ALL</h2>
                </div>
                {allMakes.map((make) => (
                    <div
                        className='mt-2.5 flex cursor-pointer items-center gap-2'
                        onClick={() => {
                            if (makes.includes(make)) {
                                unApplyMakeFilter(make)
                            } else {
                                applyMakeFilter(make)
                            }
                        }}
                        key={make}
                    >
                        <CheckBox active={makes.includes(make)} />
                        <h2 className='font-semibold text-white md:text-sm'>{make.toUpperCase()}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Make
