import { Cars, MyListings } from 'pages'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from 'ui'
import useCarsStore from 'pages/Cars/store'

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
        </div>
    )
}

export default App
