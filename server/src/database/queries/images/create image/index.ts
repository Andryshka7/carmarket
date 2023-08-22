import pool from 'database'

const createImage = async (name: string, url: string, carId: number) => {
    const sql = `
    INSERT INTO images
    (name, url, car)
    VALUES (?, ?, ?)
    `
    await pool.query(sql, [name, url, carId])
}

export default createImage
