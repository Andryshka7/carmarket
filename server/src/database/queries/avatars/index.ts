import pool from 'database'

const createAvatar = async (name: string, carId: number) => {
    const sql = `
    INSERT INTO images
    (name, car)
    VALUES (?, ?)
    `
    await pool.query(sql, [name, carId])
}

const deleteAvatar = async (id: number) => {
    const sql = `
    DELETE FROM images
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { createAvatar, deleteAvatar }
