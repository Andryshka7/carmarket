import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer, Error } from 'components'
import { Listings, MyListings, CreateListing, CarPreview, LogIn, SignUp } from 'pages'
import { Loader } from 'components'
import { useLoadData } from 'hooks'

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
                    <Route path='/'>
                        <Route index element={<Listings />} />
                        <Route path=':id' element={<CarPreview />} />
                    </Route>

                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />

                    <Route path='/mylistings' element={<MyListings />} />
                    <Route path='/createlisting' element={<CreateListing />} />
                    <Route path='/*' element={<Error />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
