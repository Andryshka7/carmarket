import { useState } from 'react'
import { EditButton, DeleteButton, DeleteConfirmation } from './components'
import { useCarsStore } from 'store'

interface Props {
    id: number
    isHovering: boolean
    editListing: () => void
}

const HoverMenu = ({ id, isHovering, editListing }: Props) => {
    const { removeCar } = useCarsStore()
    const [deletePending, setDeletePending] = useState(false)

    const deleteCar = async () => {
        await new Promise((res) => setTimeout(res, 500))
        removeCar(id)
    }

    const cancelDelete = () => {
        setDeletePending(false)
    }

    return (
        <div
            className={`absolute flex h-full w-full items-center justify-center rounded-t-lg bg-black text-xl transition duration-200 ${
                isHovering ? 'opacity-1' : 'pointer-events-none opacity-0'
            } ${deletePending ? 'bg-opacity-80' : 'bg-opacity-70'}`}
        >
            <DeleteConfirmation
                deletePending={deletePending}
                deleteCar={deleteCar}
                cancelDelete={cancelDelete}
            />

            <div
                className={`absolute flex items-center justify-center gap-3 transition duration-200 ${
                    deletePending ? 'pointer-events-none opacity-0' : 'opacity-1'
                }`}
            >
                <EditButton onClick={editListing} />
                <DeleteButton onClick={() => setDeletePending(true)} />
            </div>
        </div>
    )
}

export default HoverMenu
