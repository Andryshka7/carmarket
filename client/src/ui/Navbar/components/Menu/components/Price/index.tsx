const Price = () => (
    <>
        <h2 className='mx-auto mt-5 text-4xl font-semibold text-white'>Price</h2>
        <div className='mt-4 flex gap-2'>
            <input
                type='text'
                placeholder='From'
                className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
            />
            <p className='text-lg font-bold text-[#999]'>-</p>
            <input
                type='text'
                placeholder='To'
                className='h-8 w-20 rounded border border-[#999] bg-transparent text-center text-white focus:outline-none'
            />
        </div>
    </>
)

export default Price
