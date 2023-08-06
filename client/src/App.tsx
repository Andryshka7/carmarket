import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from 'ui'
import { Cars, MyListings } from 'pages'
import useCarsStore from 'pages/Cars/components/Cars/store'
import CarPreview from 'pages/Car preview'

function App() {
    const { fetchCars } = useCarsStore()

    useEffect(() => {
        fetchCars()
    }, [])

    return (
        <div className='flex min-h-screen flex-col bg-neutral-800'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/mylistings' element={<MyListings />} />
                    <Route path='/'>
                        <Route index element={<Cars />} />
                        <Route path=':id' element={<CarPreview />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
