import pool from 'database'

const createImage = async (name: string, carId: number) => {
    const sql = `
    INSERT INTO images
    (name, car)
    VALUES (?, ?)
    `
    await pool.query(sql, [name, carId])
}

export default createImage