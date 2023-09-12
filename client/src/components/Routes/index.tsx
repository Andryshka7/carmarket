import { Route, Routes } from 'react-router-dom'
import { Listings, MyListings, CreateListing, CarPreview, LogIn, SignUp, PageNotFound } from 'pages'

const AppRoutes = () => (
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
            element={<PageNotFound />}
        />
    </Routes>
)

export default AppRoutes
