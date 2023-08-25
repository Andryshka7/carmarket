import pool from 'database'

const deleteCar = async (carId: number) => {
    const sql = `
    DELETE FROM cars 
    WHERE id = ?
    `
    await pool.query(sql, [carId])
}

export default deleteCar
