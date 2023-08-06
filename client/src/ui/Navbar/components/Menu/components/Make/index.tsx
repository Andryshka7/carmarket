const makes = ['bmw', 'porche', 'mercedes', 'lamborgini']

const Make = () => (
    <>
        <h2 className='mx-auto mt-5 text-4xl font-semibold text-white'>Make</h2>
        <div className='mt-4'>
            <div className='flex items-center gap-2'>
                <img src='logo.png' className='h-7' />
                <h2 className='font-semibold text-white'>ALL</h2>
            </div>
            {makes.map((make) => (
                <div className='mt-3 flex items-center gap-2' key={make}>
                    <img src={`/car logos/${make}.png`} className='h-7' />
                    <h2 className='font-semibold text-white'>{make.toUpperCase()}</h2>
                </div>
            ))}
        </div>
    </>
)

export default Make
