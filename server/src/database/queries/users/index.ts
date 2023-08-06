import pool from 'database'
import { User } from 'types'

const fetchUsers = async () => {
    const sql = `
    SELECT * FROM users
    `
    const [rows] = await pool.query(sql)
    return rows
}

const createUser = async ({ username, email, password }: User) => {
    const sql = `
    INSERT INTO users
    (username, email, password)
    VALUES (?, ?, ?)
    `
    await pool.query(sql, [username, email, password])
}

const deleteUser = async (id: number) => {
    const sql = `
    DELETE FROM users
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { fetchUsers, createUser, deleteUser }
