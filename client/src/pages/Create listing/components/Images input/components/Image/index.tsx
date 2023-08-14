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
            className='relative h-[90px] w-40 overflow-hidden rounded-lg'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img src={source} className='h-full w-full object-cover' />
            <div
                className={`absolute left-0 top-0 flex h-full w-full flex-col items-center bg-neutral-900 opacity-0 transition duration-200 ${
                    isHovering ? 'opacity-100' : 'pointer-events-none'
                }`}
            >
                <h3 className='mt-3.5 line-clamp-1 max-w-[120px] font-semibold'>{name}</h3>
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
