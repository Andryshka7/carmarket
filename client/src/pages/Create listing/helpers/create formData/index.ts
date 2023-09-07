interface Payload {
    transmission: string
    type: string
    model: string
    year: number
    price: number
    power: string
    description: string
}

const createFormData = (data: Payload, images: File[]) => {
    const formData = new FormData()
    formData.append('car', JSON.stringify(data))

    images.forEach((item) => {
        formData.append(`image`, item)
    })

    return formData
}

export default createFormData
