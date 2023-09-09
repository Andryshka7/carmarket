import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Image } from 'types'

interface Props {
    image: File | Image
    removeImage: () => void
}

const Picture = ({ image, removeImage }: Props) => {
    const [isHovering, setIsHovering] = useState(false)

    const source = image instanceof File ? URL.createObjectURL(image) : image.url
    const name = image.name

    return (
        <div
            className='relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img
                src={source}
                className='h-full w-full object-cover'
            />
            <Transition
                show={isHovering}
                className='absolute left-0 top-0 h-full w-full bg-neutral-900 transition duration-200'
                enterFrom='opacity-0 pointer-events-none'
                leaveTo='opacity-0 pointer-events-none'
            >
                <div className='flex h-full w-full flex-col justify-center'>
                    <h3 className='mx-auto text-sm font-semibold md:text-lg'>
                        {name.length <= 10 ? name : name.slice(0, 10) + '...'}
                    </h3>
                    <AiOutlineCloseCircle
                        className='mx-auto mt-0.5 h-2/5 w-2/5 text-red-500'
                        onClick={removeImage}
                    />
                </div>
            </Transition>
        </div>
    )
}

export default Picture
