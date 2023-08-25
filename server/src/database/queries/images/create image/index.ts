import pool from 'database'

const createImage = async (name: string, originalName: string, url: string, carId: number) => {
    const sql = `
    INSERT INTO images
    (name, originalName, url, car)
    VALUES (?, ?, ?, ?)
    `
    await pool.query(sql, [name, originalName, url, carId])
}

export default createImage
