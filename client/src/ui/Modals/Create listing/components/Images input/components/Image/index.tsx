import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface Props {
    source: string
    name: string
    remove: () => void
}

const Image = ({ source, name, remove }: Props) => {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div
            className='relative w-40 h-[90px] rounded-lg overflow-hidden'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img src={source} className='w-full h-full object-cover' />
            <div
                className={`absolute top-0 left-0 flex flex-col items-center w-full h-full bg-neutral-900 transition duration-200 opacity-0 ${
                    isHovering ? 'opacity-100' : 'pointer-events-none'
                }`}
            >
                <h3 className='mt-3.5 font-semibold line-clamp-1 max-w-[120px]'>{name}</h3>
                <AiOutlineCloseCircle
                    size={30}
                    className='mt-1.5 text-red-500 transition duration-200 hover:scale-110'
                    onClick={remove}
                />
            </div>
        </div>
    )
}

export default Image
