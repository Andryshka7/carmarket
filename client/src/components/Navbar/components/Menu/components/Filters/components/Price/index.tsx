import { useForm } from 'react-hook-form'
import { useFiltersStore } from 'store'

type Data = {
    from: number
    to: number
}

const Price = () => {
    const { register, handleSubmit } = useForm<Data>()
    const { setPriceFilters } = useFiltersStore()

    const submit = (data: Data) => {
        const payload = {
            from: +data.from || null,
            to: +data.to || null
        }
        setPriceFilters(payload)
    }

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-3 md:text-2xl'>Price</h2>
            <form onSubmit={handleSubmit(submit)} className='mt-4 flex gap-2 md:mt-3'>
                <input
                    {...register('from')}
                    type='number'
                    placeholder='From'
                    className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
                />
                <p className='text-lg font-bold text-[#999]'>-</p>
                <input
                    {...register('to')}
                    type='number'
                    placeholder='To'
                    className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
                />
                <button className='submit' hidden />
            </form>
        </>
    )
}

export default Price
