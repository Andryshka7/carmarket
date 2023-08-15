import pool from 'database'
import { deleteImage } from 'database/queries/images'

const deleteCar = async (id: number) => {
    const sql = `
    DELETE FROM cars 
    WHERE id = ?
    `

    await deleteImage(id)
    await pool.query(sql, [id])
}

export default deleteCar
