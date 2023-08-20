import { MdOutlineDelete } from 'react-icons/md'

interface Props {
    onClick: () => void
}

const DeleteButton = ({ onClick }: Props) => (
    <MdOutlineDelete
        size={35}
        color='white'
        className='transition duration-200 hover:scale-110 cursor-pointer'
        onClick={onClick}
    />
)

export default DeleteButton
