import pool from 'database'

const deleteImage = async (originalName: string) => {
    const sql = `
    DELETE FROM images
    WHERE originalName = ?
    `
    await pool.query(sql, [originalName])
}

export default deleteImage
