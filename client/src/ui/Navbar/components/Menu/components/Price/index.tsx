const Price = () => (
    <>
        <h2 className='text-white mx-auto text-4xl mt-5 font-semibold'>Price</h2>
        <div className='flex gap-2 mt-4'>
            <input
                type='text'
                placeholder='From'
                className='bg-transparent h-8 w-20 text-white text-center rounded border border-[#999] focus:outline-none'
            />
            <p className='text-[#999] text-lg font-bold'>-</p>
            <input
                type='text'
                placeholder='To'
                className='bg-transparent h-8 w-20 text-white text-center rounded border border-[#999] focus:outline-none'
            />
        </div>
    </>
)

export default Price
