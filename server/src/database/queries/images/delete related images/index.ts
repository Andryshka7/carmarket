import pool from 'database'

const deleteRelatedImages = async (carId: number) => {
	const sql = `
    DELETE FROM images
    WHERE car = ?
    `
	await pool.query(sql, [carId])
}

export default deleteRelatedImages
