import { Dispatch } from 'react'
import { Picture } from './components'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'
import { Image } from 'types'

interface Props {
    images: (Image | File)[]
    setImages: Dispatch<React.SetStateAction<(Image | File)[]>>
}

const ImagesInput = ({ images, setImages }: Props) => {
    const removeImage = (index: number) => setImages((images) => images.filter((_, n) => index !== n))

    return (
        <div className='xs:grid-cols-3 mt-2 grid grid-cols-2 gap-x-4 gap-y-3'>
            {images.map((image, index) => (
                <Picture
                    image={image}
                    removeImage={() => removeImage(index)}
                    key={image.name + index}
                />
            ))}
            <label htmlFor='images-input'>
                <div className='flex aspect-video w-full cursor-pointer rounded-lg bg-neutral-900'>
                    <div className='flex h-full w-full flex-col justify-center'>
                        <h3 className='mx-auto text-sm font-semibold text-zinc-300 sm:text-lg'>Add image</h3>
                        <BiSolidMessageSquareAdd
                            size={30}
                            className='mx-auto mt-0.5 h-2/5 w-2/5 text-green-600 transition duration-200 hover:scale-110'
                        />
                    </div>
                </div>
            </label>
            <input
                type='file'
                id='images-input'
                onChange={(e) => {
                    const files = e.target.files
                    if (files) {
                        setImages((images) => [...images, ...files])
                    }
                }}
                onClick={(e) => (e.currentTarget.value = '')}
                accept='image/*'
                hidden
                multiple
            />
        </div>
    )
}

export default ImagesInput
