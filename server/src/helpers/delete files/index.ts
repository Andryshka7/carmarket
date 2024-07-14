import { unlink } from 'fs/promises'
import { join } from 'path'

const deleteFiles = async (...files: string[]) => {
	await Promise.all(
		files.map((fileName) => {
			const filePath = join(__dirname, '..', '..', '..', fileName)
			return unlink(filePath)
		})
	)
}

export default deleteFiles
