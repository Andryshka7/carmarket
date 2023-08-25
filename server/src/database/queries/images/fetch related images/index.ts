import pool from 'database'
import { Image } from 'types'

const fetchRelatedImages = async (carId: number) => {
    const sql = `
    SELECT * FROM images
    WHERE car = ?
    `
    const [rows] = await pool.query(sql, [carId])

    if (Array.isArray(rows)) {
        return (rows as Image[]).map(({ originalName }) => originalName)
    } else {
        return null
    }
}

export default fetchRelatedImages
