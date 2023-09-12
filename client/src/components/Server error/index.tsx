import offlineServer from 'assets/offline-server.png'

const ServerError = () => (
    <div className='flex min-h-screen flex-col items-center justify-center bg-neutral-800'>
        <img
            src={offlineServer}
            className='h-52 w-52'
        />
        <h1 className='mt-10 text-4xl font-semibold text-white'>Carmarket is temporarily offline :(</h1>
    </div>
)

export default ServerError