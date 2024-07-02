import multer from 'multer'

const storage = multer.memoryStorage()

export const upload = multer({ storage })

export { uploadFile, deleteFile } from './files'
export { createAccessToken, createRefreshToken, verifyToken } from './jwt'
