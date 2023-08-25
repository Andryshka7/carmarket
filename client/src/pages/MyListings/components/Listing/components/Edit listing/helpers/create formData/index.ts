interface Payload {
    id: number
    model: string
    year: number
    power: string
    price: number
    type: string
    transmission: string
    description: string
}

const createFormData = (data: Payload, images: File[], removedImages: string[]) => {
    const formData = new FormData()
    formData.append('car', JSON.stringify(data))

    images.forEach((item) => {
        formData.append(`image`, item)
    })

    formData.append('removedImages', JSON.stringify(removedImages))

    return formData
}

export default createFormData
