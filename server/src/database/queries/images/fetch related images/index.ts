import pool from 'database'
import { RowDataPacket } from 'mysql2'
import { Image } from 'types'

const fetchRelatedImages = async (carId: number) => {
    const sql = `
    SELECT * FROM images
    WHERE car = ?
    `
    const [rows] = await pool.query<RowDataPacket[]>(sql, [carId])

    if (rows.length) {
        return (rows as Image[]).map(({ url }) => url)
    } else {
        return null
    }
}

export default fetchRelatedImages
