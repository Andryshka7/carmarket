import pool from 'database'

const createImage = async (name: string, carId: number) => {
    const sql = `
    INSERT INTO images
    (name, car)
    VALUES (?, ?)
    `
    await pool.query(sql, [name, carId])
}

const deleteImage = async (id: number) => {
    const sql = `
    DELETE FROM images
    WHERE car = ?
    `
    await pool.query(sql, [id])
}

export { createImage, deleteImage }
