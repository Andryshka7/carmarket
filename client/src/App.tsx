import { Cars, MyListings } from 'pages'
import useCarsStore from 'pages/Cars/store'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from 'ui'
import CreateListing from 'ui/Modals/Create listing'

function App() {
    const { fetchCars } = useCarsStore()

    useEffect(() => {
        fetchCars()
    }, [])

    return (
        <div className='flex flex-col min-h-screen bg-neutral-800'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Cars />} />
                    <Route path='/mylistings' element={<MyListings />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <CreateListing />
        </div>
    )
}

export default App
