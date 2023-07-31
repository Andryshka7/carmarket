const makes = ['bmw', 'porche', 'mercedes', 'lamborgini']

const Make = () => (
    <>
        <h2 className='text-white mx-auto text-4xl mt-5 font-semibold'>Make</h2>
        <div className='mt-4'>
            <div className='flex items-center gap-2'>
                <img src='logo.png' className='h-7' />
                <h2 className='text-white font-semibold'>ALL</h2>
            </div>
            {makes.map((make) => (
                <div className='flex mt-3 items-center gap-2' key={make}>
                    <img src={`/car logos/${make}.png`} className='h-7' />
                    <h2 className='text-white font-semibold'>{make.toUpperCase()}</h2>
                </div>
            ))}
        </div>
    </>
)

export default Make
