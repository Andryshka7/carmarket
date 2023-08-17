import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from 'ui'
import { Cars, MyListings, CreateListing, CarPreview, LogIn, SignUp } from 'pages'
import { Loader, ProtectedPage } from 'ui'
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
                        <Route index element={<Cars />} />
                        <Route path=':id'>
                            <Route index element={<CarPreview />} />
                        </Route>
                    </Route>

                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />

                    <Route
                        path='/mylistings'
                        element={
                            <ProtectedPage>
                                <MyListings />
                            </ProtectedPage>
                        }
                    />
                    <Route
                        path='/createlisting'
                        element={
                            <ProtectedPage>
                                <CreateListing />
                            </ProtectedPage>
                        }
                    />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
