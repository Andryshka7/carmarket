import { AiOutlineEdit } from 'react-icons/ai'

interface Props {
	onClick: () => void
}

const EditButton = ({ onClick }: Props) => (
	<AiOutlineEdit
		size={35}
		color="white"
		className="cursor-pointer transition duration-200 hover:scale-110"
		onClick={onClick}
	/>
)

export default EditButton
