const AppLoader = () => (
    <div className='flex min-h-screen items-center justify-center bg-neutral-800'>
        <div className='loader mx-auto flex h-5 w-fit items-center justify-center'>
            <div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
            <div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
            <div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
        </div>
    </div>
)

export default AppLoader
