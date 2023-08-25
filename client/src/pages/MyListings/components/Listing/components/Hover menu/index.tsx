import { useState } from 'react'
import { EditButton, DeleteButton, DeleteConfirmation } from './components'
import { useCarsStore } from 'store'
import { deleteCarQuery } from 'api/cars'
import { useCreateProtectedRequest } from 'hooks'

interface Props {
    id: number
    isHovering: boolean
    openModal: () => void
}

const HoverMenu = ({ id, isHovering, openModal }: Props) => {
    const createProtectedRequest = useCreateProtectedRequest()
    const [deletePending, setDeletePending] = useState(false)
    const { removeCar } = useCarsStore()

    const deleteCar = createProtectedRequest(
        async (token) => await deleteCarQuery(token, id),
        () => removeCar(id)
    )

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
                <EditButton onClick={openModal} />
                <DeleteButton onClick={() => setDeletePending(true)} />
            </div>
        </div>
    )
}

export default HoverMenu
