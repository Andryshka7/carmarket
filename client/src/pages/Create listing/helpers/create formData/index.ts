import { Image } from 'types'

interface Payload {
    transmission: string
    type: string
    model: string
    year: number
    price: number
    power: string
    description: string
}

const createFormData = (data: Payload, images: (Image | File)[]) => {
    const formData = new FormData()
    formData.append('car', JSON.stringify(data))

    images.forEach((item) => {
        if (item instanceof File) {
            formData.append(`image`, item)
        }
    })

    return formData
}

export default createFormData
