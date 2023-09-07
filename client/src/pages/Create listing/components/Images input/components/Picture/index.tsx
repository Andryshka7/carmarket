import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface Props {
    image: File
    removeImage: () => void
}

const Picture = ({ image, removeImage }: Props) => {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div
            className='relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img
                src={URL.createObjectURL(image)}
                className='h-full w-full object-cover'
            />
            <div
                className={`absolute left-0 top-0 h-full w-full bg-neutral-900 opacity-0 transition duration-200 ${
                    isHovering ? 'opacity-100' : 'pointer-events-none'
                }`}
            >
                <div className='flex h-full w-full flex-col justify-center'>
                    <h3 className='mx-auto text-sm font-semibold md:text-lg'>
                        {image.name.length <= 10 ? image.name : image.name.slice(0, 10) + '...'}
                    </h3>
                    <AiOutlineCloseCircle
                        className='mx-auto mt-0.5 h-2/5 w-2/5 text-red-500'
                        onClick={removeImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Picture
