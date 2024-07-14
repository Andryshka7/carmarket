import { MdOutlineDelete } from 'react-icons/md'

interface Props {
	onClick: () => void
}

const DeleteButton = ({ onClick }: Props) => (
	<MdOutlineDelete
		size={35}
		color="white"
		className="cursor-pointer transition duration-200 hover:scale-110"
		onClick={onClick}
	/>
)

export default DeleteButton
