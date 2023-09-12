import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useLoadData } from 'hooks'
import { Navbar, Routes, Footer, AppLoader, ServerError } from 'components'

function App() {
    const { error, loading, loadData } = useLoadData()

    useEffect(() => {
        loadData()
    }, [])

    if (error) return <ServerError />
    if (loading) return <AppLoader />

    return (
        <div className='flex min-h-screen flex-col bg-neutral-800'>
            <Toaster position='top-center' />
            <Navbar />
            <Routes />
            <Footer />
        </div>
    )
}

export default App
