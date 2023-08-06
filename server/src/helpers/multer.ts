import multer from 'multer'
import { uuid } from 'uuidv4'

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'src/images/')
    },
    filename: function (req, file, callBack) {
        const extension = file.originalname.slice(file.originalname.indexOf('.'))
        const name = uuid() + extension
        callBack(null, name)
    }
})

const upload = multer({ storage })

export default upload
