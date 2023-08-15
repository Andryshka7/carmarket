import pool from 'database'

const deleteUser = async (id: number) => {
    const sql = `
    DELETE FROM users
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export default deleteUser
