import pool from 'database'

const deleteImage = async (id: number) => {
    const sql = `
    DELETE FROM images
    WHERE car = ?
    `
    await pool.query(sql, [id])
}

export default deleteImage
