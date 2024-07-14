import { SERVER_URL } from 'config'
import { unlink } from 'fs/promises'
import { join } from 'path'

const deleteFiles = async (...urls: string[]) => {
	await Promise.all(
		urls.map((url) => {
			const fileName = url.replace(`${SERVER_URL}/images/`, '')
			const filePath = join(__dirname, '..', '..', '..', 'images', fileName)
			return unlink(filePath)
		})
	)
}

export default deleteFiles
