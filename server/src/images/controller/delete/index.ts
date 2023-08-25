import { unlink } from 'fs'
import { join } from 'path'

const deleteImages = (...images: string[]) => {
    images.forEach((fileName) => {
        const filePath = join(__dirname, '..', '..', fileName)
        unlink(filePath, (err) => {
            if (err) console.log(err)
        })
    })
}

export default deleteImages
