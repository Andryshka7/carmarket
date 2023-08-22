import { Loader } from 'components'
import { useState } from 'react'

interface Props {
    deletePending: boolean
    deleteCar: () => void
    cancelDelete: () => void
}

const DeleteConfirmation = ({ deletePending, deleteCar, cancelDelete }: Props) => {
    const [loading, setLoading] = useState(false)

    const confirmDelete = async () => {
        try {
            setLoading(true)
            await deleteCar()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('Error deleting car', error)
        }
    }

    return loading ? (
        <Loader />
    ) : (
        <div
            className={`absolute transition duration-200 ${
                deletePending ? 'opacity-1' : 'pointer-events-none opacity-0'
            }`}
        >
            <h1 className='mx-auto w-56 text-center font-semibold'>
                Are you sure you want to delete this listing?
            </h1>
            <div className='mx-auto mt-4 flex w-fit gap-8'>
                <button
                    className='rounded-md bg-green-600 px-4 py-1 text-sm font-semibold transition duration-200 hover:scale-105'
                    onClick={confirmDelete}
                >
                    Yes
                </button>
                <button
                    className='rounded-md bg-red-500 px-4 py-1 text-sm font-semibold transition duration-200 hover:scale-105'
                    onClick={cancelDelete}
                >
                    No
                </button>
            </div>
        </div>
    )
}

export default DeleteConfirmation
