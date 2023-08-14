import { Dispatch } from 'react'
import { Image } from './components'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'

interface Props {
    images: File[]
    setImages: Dispatch<React.SetStateAction<File[]>>
}

const ImagesInput = ({ images, setImages }: Props) => (
    <div className='mt-2 flex w-full flex-wrap gap-x-4 gap-y-3'>
        {images.map((image, index) => (
            <Image
                source={URL.createObjectURL(image)}
                name={image.name}
                key={image.name}
                remove={() => {
                    setImages((images) => images.filter((_, id) => index !== id))
                }}
            />
        ))}
        <label htmlFor='images-input'>
            <div className='flex h-[90px] w-40 flex-col items-center rounded-lg bg-neutral-900'>
                <h3 className='mt-3 text-lg font-semibold text-zinc-300'>Add image</h3>
                <BiSolidMessageSquareAdd className='mt-1 text-green-600' size={30} />
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

export default ImagesInput
