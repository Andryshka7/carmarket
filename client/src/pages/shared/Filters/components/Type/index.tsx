import { CheckBox } from 'components'
import { useFiltersStore } from 'store'
import { Type } from 'types'

const typesArray: Type[] = ['fuel', 'electric']

const TypeSelect = () => {
    const { types, switchType } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-4 md:text-2xl'>Type</h2>
            <div className='mt-2 w-28'>
                {typesArray.map((type) => (
                    <div
                        className='flex cursor-pointer items-center gap-2'
                        onClick={() => switchType(type)}
                        key={type}
                    >
                        <CheckBox active={types[type]} />
                        <h2 className='text-lg text-white'>{type[0].toUpperCase() + type.slice(1)}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TypeSelect
