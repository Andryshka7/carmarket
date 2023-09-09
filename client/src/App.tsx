import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer, Error } from 'components'
import { Listings, MyListings, CreateListing, CarPreview, LogIn, SignUp } from 'pages'
import { Loader } from 'components'
import { useLoadData } from 'hooks'
import { Toaster } from 'react-hot-toast'

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
            <Toaster position='top-center' />
            <Navbar />
            <Routes>
                <Route path='/'>
                    <Route
                        index
                        element={<Listings />}
                    />
                    <Route
                        path=':id'
                        element={<CarPreview />}
                    />
                </Route>

                <Route
                    path='/login'
                    element={<LogIn />}
                />
                <Route
                    path='/signup'
                    element={<SignUp />}
                />

                <Route
                    path='/mylistings'
                    element={<MyListings />}
                />
                <Route
                    path='/listcar'
                    element={<CreateListing />}
                />
                <Route
                    path='/*'
                    element={<Error />}
                />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
