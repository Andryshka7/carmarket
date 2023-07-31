import pool from 'database'
import { User } from 'types'

const fetchUsers = async () => {
    const sql = `
    SELECT * FROM users
    `
    const [rows] = await pool.query(sql)
    return rows
}

const addUser = async ({ name, surname, age, email, password }: User) => {
    const sql = `
    INSERT INTO users
    (name, surname, age, email, password)
    VALUES (?, ?, ?, ?, ?)
    `
    await pool.query(sql, [name, surname, age, email, password])
}

const deleteUser = async (id: number) => {
    const sql = `
    DELETE FROM users
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { fetchUsers, addUser, deleteUser }
