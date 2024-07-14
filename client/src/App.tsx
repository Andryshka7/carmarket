import { AppLoader, Footer, Navbar, Routes, ServerError } from 'components'
import { useLoadData } from 'hooks'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function App() {
	const { error, loading, loadData } = useLoadData()

	useEffect(() => {
		loadData()
	}, [])

	if (error) return <ServerError />
	if (loading) return <AppLoader />

	return (
		<div className="flex min-h-screen flex-col bg-neutral-800">
			<Toaster position="top-center" />
			<Navbar />
			<Routes />
			<Footer />
		</div>
	)
}

export default App
