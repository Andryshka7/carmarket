import { useState } from 'react'
import { EditButton, DeleteButton, DeleteConfirmation } from './components'
import { useCarsStore } from 'store'
import { useNavigate } from 'react-router-dom'

interface Props {
    id: number
    isHovering: boolean
}

const HoverMenu = ({ id, isHovering }: Props) => {
    const navigate = useNavigate()
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
            className={`absolute flex aspect-video w-[370px] items-center justify-center rounded-t-lg bg-black text-xl transition duration-200 ${
                isHovering ? 'opacity-1' : 'opacity-0'
            } ${deletePending ? 'bg-opacity-80' : 'bg-opacity-70'}`}
        >
            <DeleteConfirmation
                deletePending={deletePending}
                deleteCar={deleteCar}
                cancelDelete={cancelDelete}
            />

            <div
                className={`absolute flex items-center justify-center gap-3 transition duration-200 ${
                    deletePending ? 'opacity-0' : 'opacity-1'
                }`}
            >
                <EditButton onClick={() => navigate(String(id))} />
                <DeleteButton onClick={() => setDeletePending(true)} />
            </div>
        </div>
    )
}

export default HoverMenu
