import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from 'ui'
import { Cars, MyListings, CreateListing, CarPreview, LogIn, SignUp } from 'pages'
import Loader from 'ui/Loader'
import useLoadData from 'hooks/useLoadData'

function App() {
    const { loading, loadData } = useLoadData()

    useEffect(() => {
        loadData()
    }, [])

    return loading ? (
        <div className='flex min-h-screen items-center justify-center bg-neutral-800'>
            <Loader />
        </div>
    ) : (
        <div className='flex min-h-screen flex-col bg-neutral-800'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/mylistings' element={<MyListings />} />
                    <Route path='/createlisting' element={<CreateListing />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/'>
                        <Route index element={<Cars />} />
                        <Route path=':id'>
                            <Route index element={<CarPreview />} />
                        </Route>
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
