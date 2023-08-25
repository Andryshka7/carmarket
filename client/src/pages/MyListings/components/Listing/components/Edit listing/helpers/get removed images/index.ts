import { Image } from 'types'

const getRemovedImages = (images: (Image | File)[], initialImages: Image[]) => {
    const removedImages = initialImages.filter(
        (item) => !images.find((image) => !(image instanceof File) && image.name === item.name)
    )
    return removedImages.map(({ originalName }) => originalName)
}

export default getRemovedImages
